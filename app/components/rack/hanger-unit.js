import React from "react";
import {
  StyledHangerUnit,
  ItemDrop,
  AddIcon,
  DropText
} from "./hanger-unit.styles";

const HangerUnit = ({
  className,
  style,
  productImage,
  placeholder = false
}) => {
  let emptyHanger =
    "https://res.cloudinary.com/cxn-fashion/image/upload/v1558985688/hanger_sleex4.svg";
  let bgImage = {
    backgroundImage: `url(${productImage ? productImage : emptyHanger})`
  };

  return (
    <StyledHangerUnit
      default={!productImage}
      product={productImage}
      className={className}
      style={{ ...bgImage, ...style }}
    >
      {placeholder && (
        <ItemDrop>
          <AddIcon>+</AddIcon>
          <DropText>Drop Items Here</DropText>
        </ItemDrop>
      )}
    </StyledHangerUnit>
  );
};

export default HangerUnit;
