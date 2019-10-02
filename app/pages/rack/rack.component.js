import React from "react";

import { Context } from "../../reducers/state_provider";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import uuid from "uuid/v4";

import Camera from "../../components/rack/camera.component";
import Page from "../../layouts/page";
import HangerUnit from "../../components/rack/hanger-unit";
import POMenu from "./po-menu/po-menu.component";
import { formatCartData } from "../../utils/helper_functions";

import MockRackData from "./mock-rack-data";
import { gaTrackRackEvents, RackEventsTypes, Analytics } from "../../utils/ga_analytics";

import {
  RackContent,
  DraggableArea,
  RackBar,
  HangerContainer,
  ThemeImage,
} from "./rack.styles";


class RackPage extends React.Component {

  static contextType = Context;

  BACKGROUNDS = [
    {
      url: "https://res.cloudinary.com/cxn-fashion/image/upload/q_auto,f_auto/v1558985595/AdobeStock_175185264_hba2tf.jpg",
      active:true,
    },
    {
      url: "https://res.cloudinary.com/cxn-fashion/image/upload/q_auto,f_auto,c_scale,g_south,h_3000,w_6000/v1558985612/AdobeStock_226165980_mteune.jpg",
      active:false,
    },
    {
      url: 'https://res.cloudinary.com/cxn-fashion/image/upload/q_auto,f_auto/v1562529980/store_fc6b4t.jpg',
      active: false
    }
  ];

  clickStartX = 0;

  constructor(props) {
    super(props);
    this.state = {
      items: MockRackData(),
      shipMents: [],
      sum: 0.0,
      hasItems: false,
      activeBg: this.BACKGROUNDS[0]
    };
    this.hangerContainerRef = React.createRef();
  }

  componentDidMount() {
    Analytics.getInstance().gaTrackPageView();
  }

  // --- Drag / Drop context ---

  onDragStart() {
    window.navigator.vibrate && window.navigator.vibrate(100);
  }

  onDragEnd(result) {
    const { source, destination } = result;
    const [{cart}] = this.context;
    const { shipMents } = formatCartData(cart);

    // dropped outside the list
    if (!destination) {
      return;
    }

    switch (source.droppableId) {
      case "cart-droppable":;

        const flatCart = shipMents.flatMap(x => x.items);
        let item = {
          ...flatCart[Math.min(Math.max(source.index, 0), flatCart.length - 1)],
          id: uuid()
        };

        const newItems = [...this.state.items];

        if (destination.index === newItems.length) {
          newItems.push(item);
        } else if (newItems[destination.index] && newItems[destination.index].placeholder) {
          newItems[destination.index] = item;
        } else {
          newItems.splice(destination.index, 0, item);
        }
        this.setState({
          items: newItems,
          hasItems: true
        });
        break;
      default:
        this.setState({
          items: this.reorder(
            this.state.items,
            result.source.index,
            result.destination.index
          )
        });
    }
  }

  copy(source, destination, droppableSource, droppableDestination) {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const item = sourceClone[droppableSource.index];

    destClone.splice(droppableDestination.index, 0, { ...item, id: uuid() });
    return destClone;
  }

  reorder(list, startIndex, endIndex) {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  }

  getDragItemStyle(isDragging, draggableStyle) {
    return {
      // change background colour if dragging
      backgroundColor: isDragging ? "lightblue" : "inherit",

      //   width: isDragging ? 'lightgreen' : 'inherit',
      // styles we need to apply on draggables
      ...draggableStyle
    };
  }

  getDragListStyle(isDraggingOver) {}

  // --- Click events  ---

  //TODO: Move to top Scroll bar
  onMouseDown(event) {
    this.clickStartX = event.pageX;
  }

  onMouseUp(event) {
    let change = event.pageX - this.clickStartX;
    change = Math.sign(change) * 250;

    //   this.hangerContainerRef.current.scrollTo(this.hangerContainerRef.current.scrollLeft - change, 0)
  }

  setActiveBackground(newActive) {
    this.state.activeBg.active = false;
    newActive.active = true;
    this.setState({activeBg: newActive});
  }

  render() {
    const [{cart, user}] = this.context;
    const { shipMents, sum } = formatCartData(cart);
    return (
      <Page title="Rack" theme="dark">
        <RackContent
          backgroundUrl = {this.state.activeBg.url}
          onMouseDown={e => this.onMouseDown(e)}
          onMouseUp={e => this.onMouseUp(e)}
          ref={this.hangerContainerRef}
        >
          <DragDropContext
            onDragEnd={e => this.onDragEnd(e)}
            onDragStart={e => this.onDragStart(e)}
          >
            <Droppable droppableId="rack-droppable" direction="horizontal">
              {(provided, snapshot) => (
                <DraggableArea>
                  <RackBar
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    style={{
                      width: `${this.state.items.length * 285}px`,
                      ...this.getDragListStyle(snapshot.isDraggingOver)
                    }}
                  >
                    {this.state.items.map((item, i) => (
                      <Draggable key={item.id} draggableId={item.id} key={item.id} index={i}>
                        {(provided, snapshot) => (
                          <HangerContainer
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{ left: `${30 + (i * 240)}px` }}
                          >
                            <HangerUnit
                              productImage={item.image}
                              style={this.getDragItemStyle(
                                snapshot.isDragging,
                                provided.draggableProps.style
                              )}
                              placeholder={
                                item.placeholder &&
                                i == 0 &&
                                !this.state.hasItems
                              }
                            />
                          </HangerContainer>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </RackBar>
                </DraggableArea>
              )}
            </Droppable>
            <div>
              <POMenu shipMents={shipMents} sum={sum} user={user}/>
            </div>
          </DragDropContext>


          {
            this.BACKGROUNDS.map((bg, i) => (
              <ThemeImage
                key={uuid()}
                className={bg.active ? 'active':''}
                url={bg.url}
                style={{bottom: `${200 - (i * 40)}px` }}
                onClick={() => {this.setActiveBackground.apply(this, [bg]); gaTrackRackEvents(RackEventsTypes.RakeThemeChanged, bg.url)}}
              />
            ))
          }

          <Camera />

        </RackContent>
      </Page>
    );
  }
}

// --- React props ---/

RackPage.getInitialProps = async req => {
  return { theme: "dark", title: "The Rack", showRack: false };
};

RackPage.defaultProps = {};

export default RackPage;
