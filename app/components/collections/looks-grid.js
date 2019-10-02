import React, { useState, useEffect, useRef, useMemo, Fragment } from "react";
import { useSpring } from "react-spring";
import { useStateProvider } from "../../reducers/state_provider";
import { globalTypes } from "../../reducers/global_reducer";

import {
  StyledLooksGrid,
  LooksButtonWrapper,
  ProductInfo,
  ButtonWrapper,
  StyledButton,
  ScrollArrow,
  LooksPanel,
  StyledVariantSelect
} from "./looks-grid-styles";
import LookCell from "./look-cell";
import { gaTrackRackEvents, RackEventsTypes } from "../../utils/ga_analytics";

const LooksGrid = ({ cuePointLooks, play, pause, looksPerRow=2, isPlaying, collectionName}) => {

  const [{ cart }, dispatch] = useStateProvider();
  const [activeImageId, setActiveImageId] = useState(-1);
  const [activeSelectOption, setActiveSelectOption] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [buttonCopy, setButtonCopy] = useState("ADD TO RACK" );
  const [activeLook, setActiveLook] = useState(cuePointLooks[0]);

  // -- Element Refs ---
  const looksGridRef = useRef(null);
  // --

  const extendProduct = (product) => {
    return {
      ...product,
      collectionName
    }
  }

  const handleAddToRack = (type) => {
    const productsArr = [];
    if (type === "chapter") {
      cuePointLooks.forEach((look) => {
        look.products.forEach((product) => {
          productsArr.push(extendProduct(product));
        });
      });
    } else {
      activeLook.products.forEach((product) => {
        productsArr.push(extendProduct(product));
      })
    }
    setIsSubmitting(true);
    setTimeout(() => {
      dispatch({
        type: globalTypes.addToRack,
        payload: productsArr
      });
      setIsSubmitting(false);
      setButtonCopy("ADDED TO RACK");
      gaTrackRackEvents(RackEventsTypes.RackAddedToRack, 'Added to rack');
    }, 1000);
  };

  const handleActiveImage = (active, lookId) => {
    const newActiveLook = cuePointLooks.find((look) => look.id === lookId);
    setActiveImageId(active);
    setButtonCopy("ADD TO RACK");
    setActiveLook(newActiveLook);
    active === -1 ? play() : pause();
  };

  useEffect(() => {
    if (isPlaying) {
      setActiveImageId(-1);
    }
  }, [isPlaying]);

  useEffect(() => {
    if (activeImageId < 0) return;
    looksGridRef.current.scrollTo(0,0)
  }, [activeImageId]);

  const looksButtonAnimation = useSpring({
    height: activeImageId > -1 ? "150px" : "84px",
  });

  const looksGridAnimation = useSpring({
    height: activeImageId > -1 ? "calc(100% - 150px)" : "calc(100% - 84px)",
  });

  const cells = useMemo(() => {
    const cellsArr = [];
    cuePointLooks.forEach((look) => {
      look.videos && look.videos.forEach((url) => cellsArr.push({id: look.id, type: "video", url}));
      look.images && look.images.forEach((url) => cellsArr.push({id: look.id, type: "iamge", url}));
    })
    return cellsArr;
  }, [cuePointLooks]);

  const addToBagButton = useMemo(() => {
    const alreadyAdded = Boolean(cart.find((cartProduct) => activeLook.products.find((product) => product.id === cartProduct.id)));
    const product = activeLook.products[0];

    return (
      <LooksButtonWrapper style={looksButtonAnimation}>
        {
          activeImageId > -1 ?
            (
              <Fragment>
                <ProductInfo>
                  <span>{product.description}</span>
                  <span>{`Product #${product.vendor_product_id}`}</span>
                  <span>{`Wholesale $${product.whole_sale_price} [ Retail $${product.retail_price} ]`}</span>
                  <span>{`Color ${product.color}`}</span>
                  <span>{`Sizes ${product.sizes.join(", ")}`}</span>
                  <span>{product.gender}</span>
                </ProductInfo>
                <ButtonWrapper>
                  <StyledVariantSelect
                    activeSelectOption={activeSelectOption}
                    setActiveSelectOption={setActiveSelectOption}
                    options={product.sizes}
                  />
                  <StyledButton
                    buttonStyle={1}
                    onClick={!alreadyAdded ? handleAddToRack : undefined}
                    isSubmitting={isSubmitting}
                    cta={alreadyAdded ? "ADDED TO RACK" : buttonCopy}
                  />
                </ButtonWrapper>
              </Fragment>
            )
          : (
            <Fragment>
              <ProductInfo>
                <span/>
                <ScrollArrow direction="down" width="16px" height="16px" fill="#fff"/>
                <span>Scroll</span>
              </ProductInfo>
              <ButtonWrapper>
                <StyledButton
                  buttonStyle={1}
                  onClick={() => handleAddToRack('chapter')}
                  isSubmitting={isSubmitting}
                  cta="ADD CHAPTER TO RACK"
                />
              </ButtonWrapper>
            </Fragment>
          )
        }
      </LooksButtonWrapper>
    )
  }, [cuePointLooks, activeImageId, isSubmitting, activeSelectOption]);

  return (
    <LooksPanel>
      <StyledLooksGrid ref={looksGridRef} style={looksGridAnimation}>
        {cells.map((cell, i) => (
          <LookCell
            key={i}
            index={i}
            cell={cell.url}
            lookId={cell.id}
            isVideo={cell.type === "video"}
            activeImageId={activeImageId}
            handleActiveImage={handleActiveImage}
            looksPerRow={looksPerRow}
          />
        ))}
      </StyledLooksGrid>
      {addToBagButton}
    </LooksPanel>
  );
};

LooksGrid.defaultProps = {};

export default LooksGrid;
