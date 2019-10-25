import { useRouter } from 'next/router';
import { useState, Fragment } from "react";
import Client from "shopify-buy";
import { useSwipeable, Swipeable } from 'react-swipeable';

import "./ProductDetails.scss";
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import VariantSelector from '../../components/VariantSelector';
import RentalSelector from '../../components/rental/RentalSelector';
import RentalDateSelector from '../../components/rental/RentalDateSelector';
import Accordion from '../../components/utils/accordion/Accordion';
import ProductCarousel from '../../components/products/ProductCarousel';
import ProgressBar from '../../components/utils/ProgressBar';
import RentalInfoSnippet from '../../components/rental/RentalInfoSnippet';
import Reviews from '../../components/Reviews';
import RentalCategories from '../../components/rental/RentalCategories';
import AddToBag from '../../components/checkout/AddToBag';

const client = Client.buildClient({
  domain: "closettedevelopment.myshopify.com",
  storefrontAccessToken: "e4ef2d5a0c741c17791bb1dab8cfbb2b"
});

export default function Product({ product, client, addVariantToCart }) {
  let defaultSelectedOptions = {};
  product.options.forEach((selector) => {
    defaultSelectedOptions[selector.name] = selector.values[0].value;
  });

  const [selectedOptions, setSelectedOptions] = useState(defaultSelectedOptions);
  const [selectedVariant, setSelectedVariant] = useState(client.product.helpers.variantForOptions(product, defaultSelectedOptions));
  const [imageState, setImageState] = useState({
    currentImage: 0,
    imageCount: product.images.length
  });
  const [rentalPeriod, setRentalPeriod] = useState(4);
  const [buySelected, setBuyOption] = useState(false);

  const variantSelectors = product.options.map((option) => {
    return (
      <VariantSelector
        handleOptionChange={handleOptionChange}
        key={option.id.toString()}
        option={option}
        selectedOptions={selectedOptions}
      />
    );
  });

  function handleOptionChange(optionName, optionValue) {
    let updatedOption = {};
    updatedOption[optionName] = optionValue;

    let updatedOptions = {...selectedOptions, ...updatedOption};
    setSelectedOptions(updatedOptions);

    const updatedVariant = client.product.helpers.variantForOptions(product, updatedOptions)
    setSelectedVariant(updatedVariant)
  }

  function handleImageSwipe(number) {
    let updatedImage = {};
    updatedImage["currentImage"] = imageState.currentImage + number;
    setImageState((prevState) => {
      return {...prevState, ...updatedImage};
    });
  }

  function handleRentalPeriodChange(length) {
    setRentalPeriod(length);
    setBuyOption(false);
  }

  function handleSelectOptionToBuy() {
    setBuyOption((prevState) => !prevState);
    setRentalPeriod(null);
  }
  
  return (
    <Fragment>
      <Header></Header>
      <div className="product-details">
        <Swipeable 
          onSwipedLeft={() => (imageState.currentImage < imageState.imageCount - 1) && handleImageSwipe(1)} 
          onSwipedRight={() => (imageState.currentImage > 0) && handleImageSwipe(-1)} >
          <img src={product.images[imageState.currentImage].src} alt={`${product.title} product shot`}/>
        </Swipeable>

        <ProgressBar percentage={((imageState.currentImage + 1)/imageState.imageCount) * 100}></ProgressBar>
      
        <div className="details">
          <p className="vendor">{product.vendor}</p>
          <p className="title">{product.title}</p>
          <p className="price">${product.variants[0].price}</p>
        </div>

        <div className="flex-container">
          {variantSelectors}

          <RentalSelector 
            handleRentalPeriodChange={handleRentalPeriodChange} 
            handleSelectOptionToBuy={handleSelectOptionToBuy} 
            currentRentalPeriod={rentalPeriod} 
            buySelected={buySelected}
          />
          <RentalDateSelector rentalPeriod={rentalPeriod} />

          <hr className="divider-line"></hr>

          <AddToBag variant={selectedVariant} addVariantToCart={addVariantToCart} />

          <Accordion>
            <div label='Stylist Notes' isOpen>
              <p>
                Prabal Gurung's form-fitting midi dress is crafted from ribbed-knit fabric
                that curves around the body so flatteringly. 
                It's designed with striped color-blocking through its midi-length hem. 
              </p>
            </div>
            <div label='Size & Fit'>
              <p>
                Size & Fit text to go here
              </p>
            </div>
            <div label='Product Detail'>
              <p>
                Product detail text to go here
              </p>
            </div>
            <div label='Share'>
              <p>
                Share text to go here
              </p>
            </div>
          </Accordion>
        </div>

        <RentalInfoSnippet />
        <Reviews />
        <ProductCarousel titleText="You May Also Like" url="/products" />
        <RentalCategories />
      
        <style jsx>{`
          .product-details {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100%;
          }

          p {
            margin: 0;
            text-align: center;
          }

          .details {
            padding: 20px 0;
          }

          .price {
            margin: 10px 0;
          }

          .flex-container {
            display: flex;
            flex-direction: column;
            width: 75%;
          }

          img {
            display: block;
            max-width: 100%;
            max-height: 500px;
            padding: 20px 0;
          }
          
          .divider-line {
            height: 1px;
            width: 100%;
            background-color: black;
            border: none;
          }
          
          @media only screen and (max-width: 425px) {
            img {
              width: 100%;
            }

            .flex-container {
              width: 75%;
            }
          }

          @media only screen and (min-width: 425px) and (max-width: 1024px) {
            .flex-container {
              width: 50%;
            }
          }

          @media only screen and (min-width: 1024px) {
            .flex-container {
              width: 25%;
            }
          }
        `}</style>
        </div>
      </Fragment>
  )
}

Product.getInitialProps = async(context) => {
  const id = context.query.id;
  const product = await client.product.fetch(id).then((res) => {
    return res;
  }).catch(err => console.log(err));
  
  return { product };
}