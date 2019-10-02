import React from "react";
import { Droppable } from "react-beautiful-dnd";
import ArrowIcon from "../../../components/icons/arrow";
import ProductViewSmall from "./product-view-small.js";
import ProductViewBig from "./product-view-big.js";
import { gaTrackRackEvents, RackEventsTypes } from "../../../utils/ga_analytics";

import {
  StyledPOMenu,
  TitleContainer,
  Title,
  HeadingContainer,
  Heading,
  ExpandButton,
  POMenuHeader,
  SmallMenu,
  BigMenu,
  PlaceOrderButton,
  ScrollWrapper,
} from "./po-menu.styles";

class POMenu extends React.Component {
  state = {
    menuSize: 1,
    delaySmallMenuFadeIn: 0,
  };

  // --- React Lifecycle ---
  componentDidMount() {
    //this.textInput.current.focusTextInput();
  }

  toggleMenu = (newMenuSize = 0) => {
    this.setState(prevState => ({
      lastMenuSize: prevState.menuSize,
      menuSize: newMenuSize === 0 ? prevState.lastMenuSize : newMenuSize
    }), () => {
      if (this.state.menuSize === 3) {
        setTimeout(() => {
          this.setState({
            delaySmallMenuFadeIn: true,
          })
        }, 500);
      } else if (this.state.menuSize !== 3 && this.state.delaySmallMenuFadeIn) {
        setTimeout(() => {
          this.setState({
            delaySmallMenuFadeIn: false
          })
        }, 500);
      }
    });
  }

  render() {
    return (
      <Droppable droppableId="cart-droppable" direction="vertical">
        {(provided, snapshot) => (
          <StyledPOMenu
            ref={provided.innerRef}
            menuSize={this.state.menuSize}
            delayFadeIn={this.state.delaySmallMenuFadeIn}
            {...provided.droppableProps}
            >
            {
              (!this.state.delaySmallMenuFadeIn || (this.state.delaySmallMenuFadeIn && this.state.menuSize !== 3) ) &&
                <SmallMenu menuSize={this.state.menuSize} delayFadeIn={this.state.delaySmallMenuFadeIn}>
                  <POMenuHeader>
                    <ExpandButton visible onClick={() => {this.toggleMenu(this.state.menuSize === 2 ? 1 : 2);  gaTrackRackEvents(RackEventsTypes.RackToggled, 'Menu Toggled');}}>
                      <ArrowIcon direction={this.state.menuSize === 2 ? "right" : "left"} width="16px" height="16px"/>
                    </ExpandButton>
                    <TitleContainer>
                      <Title>{this.props.user ? `${this.props.user.nickname}'s Rack` : "Rack"}</Title>
                    </TitleContainer>
                  </POMenuHeader>
                  <ScrollWrapper>
                    <HeadingContainer small>
                      <Heading>Collections</Heading>
                      <Heading black>Faith Connexion</Heading>
                    </HeadingContainer>

                    <HeadingContainer small>
                      <Heading>Shipments</Heading>
                      <Heading black>All Shipments</Heading>
                    </HeadingContainer>
                    <ProductViewSmall menuSize={this.state.menuSize} shipMents={this.props.shipMents}/>
                  </ScrollWrapper>
                  <PlaceOrderButton onClick={() => {this.toggleMenu(3); gaTrackRackEvents(RackEventsTypes.RackPurchaseOrder, 'Submit Purchase Order')}}>
                    <div>${this.props.sum.toFixed(2)} (${(this.props.sum/2).toFixed(2)} deposit)</div>
                    REVIEW PURCHASE ORDER
                  </PlaceOrderButton>
                </SmallMenu>
            }
            {
              ((this.state.delaySmallMenuFadeIn && this.state.menuSize !== 3) || this.state.menuSize === 3) &&
                <BigMenu menuSize={this.state.menuSize} delayFadeIn={this.state.delaySmallMenuFadeIn}>
                  <ProductViewBig shipMents={this.props.shipMents} toggleMenu={this.toggleMenu}/>
                </BigMenu>
            }
            {provided.placeholder}
          </StyledPOMenu>
        )}
      </Droppable>
    );
  }

  // --- Static - Mouse Click events  ---

  onMouseDown(event) {
    this.clickStartX = event.pageX;
  }

  onMouseUp(event) {}
}

// --- React props ---/
POMenu.defaultProps = {};

export default POMenu;
