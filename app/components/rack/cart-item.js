import { Draggable } from "react-beautiful-dnd";
import { Fragment, useState } from "react";
import { useSpring } from "react-spring";
import { useStateProvider } from "../../reducers/state_provider";
import { globalTypes } from "../../reducers/global_reducer";
import {
  Item,
  Image,
  InfoHeader,
  Name,
  Details,
  SizeContainer,
  SizeWrapper,
  Size,
  ItemInfo,
  StyledCloseButton,
  MaterialContainer
} from "./cart-item.styles";

import { gaTrackRackEvents, RackEventsTypes } from "../../utils/ga_analytics";

const ItemContent = ({
  item,
  isDragging,
  draggableStyle,
  innerRef,
  dragHandleProps,
  draggableProps,
  thumbnail,
  clonedItem
}) => {
  // ------
  const [, dispatch] = useStateProvider();
  const [fadeOut, setFadeOut] = useState(false);

  const removeRackItem = () => {
    setFadeOut(true);
  }

  const fadeAnimation = useSpring({
    opacity: fadeOut ? "0" : "1",
    height: fadeOut ? "0" : thumbnail ? "212px" : "193px",
    marginTop: fadeOut ? "-2px" : "10px",
    onRest: () => {
      if (fadeOut) {
        dispatch({
          type: globalTypes.deleteFromRack,
          payload: item.id,
        });
      }
    }
  });

  let image = isDragging
    ? { backgroundImage: `url(${item.image})` }
    : { backgroundImage: `url(${item.trimmed_image})` };

  return (
    <Item
      ref={innerRef}
      {...draggableProps}
      {...dragHandleProps}
      style={{...draggableStyle, ...fadeAnimation}}
      isDragging={isDragging}
    >
      {!isDragging &&
        <StyledCloseButton onClick={()=>{removeRackItem(); gaTrackRackEvents(RackEventsTypes.RackCartRemoveItem, `product_id: ${item.id}`)}}/>
      }
      <Image style={image} thumbnail={thumbnail} clonedItem={clonedItem}/>
      {!isDragging && (
        <Fragment>
          <InfoHeader thumbnail={thumbnail}>
            <Name>{item.designer}</Name>
            <Name>{item.description}</Name>
            <Details>{`Product #${item.vendor_product_id}`}</Details>
            <Details>{item.color}</Details>
            <Details>{`Wholesale Price $${item.whole_sale_price}`}</Details>
            <Details>{`Suggested Retail Price $${item.retail_price}`}</Details>
          </InfoHeader>
          <ItemInfo thumbnail={thumbnail}>
            <SizeContainer>
              {item.sizes && item.sizes.map((size, i) => (
                <SizeWrapper key={i}>
                  <Size>{size}</Size>
                  <Size quantity>0</Size>
                </SizeWrapper>
              ))}
              <SizeWrapper>
                <Size>Total</Size>
                <Size quantity>0</Size>
              </SizeWrapper>
            </SizeContainer>
            {/* add back once we have materails
            <MaterialContainer>
              <span>item.</span>
            </MaterialContainer>
            */}
          </ItemInfo>
        </Fragment>
      )}
    </Item>
  );
};

const CartItem = ({ item, index, thumbnail }) => (
  <Draggable key={item.id} draggableId={item.id} index={index}>
    {(provided, snapshot) => (
      <Fragment>
        <ItemContent
          innerRef={provided.innerRef}
          draggableProps={provided.draggableProps}
          dragHandleProps={provided.dragHandleProps}
          thumbnail={thumbnail}
          item={item}
          isDragging={snapshot.isDragging}
          isDraggingOver={snapshot.isDraggingOver}
          draggableStyle={provided.draggableProps.style}
        />
        {snapshot.isDragging && <ItemContent item={item} thumbnail={thumbnail} clonedItem/>}
      </Fragment>
    )}
  </Draggable>
);

export default CartItem;
