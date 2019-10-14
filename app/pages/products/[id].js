import { useRouter } from 'next/router';
import { useState } from "react";
import Client from "shopify-buy";
import { useSwipeable, Swipeable } from 'react-swipeable';

import Layout from '../../components/Layout';
import VariantSelector from '../../components/VariantSelector';
import RentalSelector from '../../components/RentalSelector';
import RentalDateSelector from '../../components/RentalDateSelector';
import ProgressBar from '../../components/ProgressBar';
import Accordion from '../../components/Accordion';
import RentalInfoSnippet from '../../components/RentalInfoSnippet';
import ProductCarousel from '../../components/ProductCarousel';
import Reviews from '../../components/Reviews';
import Modal from '../../components/utils/modal/Modal';

const client = Client.buildClient({
  domain: "closettedevelopment.myshopify.com",
  storefrontAccessToken: "e4ef2d5a0c741c17791bb1dab8cfbb2b"
});

export default function Product({ product }) {
  let defaultSelectedOptions = {};
  product.options.forEach((selector) => {
    defaultSelectedOptions[selector.name] = selector.values[0].value;
  });

  const [selectedOptions, setSelectedOptions] = useState(defaultSelectedOptions);
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

  const modalContent = (
    <div>
      <p>Hello world Lorem ipsum dolor sit amet, <a href="#1">first link</a> consectetur adipiscing elit. Phasellus sagittis erat ut ex bibendum consequat. Morbi luctus ex ex, at varius purus <a href="#2">second link</a> vehicula consectetur. Curabitur a sapien a augue consequat rhoncus. Suspendisse commodo ullamcorper nibh quis blandit. Etiam viverra neque quis mauris efficitur, lobortis aliquam ex pharetra. Nam et ante ex. Sed gravida gravida ligula, non blandit nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer consectetur efficitur tempor. Nunc sollicitudin felis congue facilisis faucibus. Mauris faucibus sit amet ante eleifend dapibus.</p>
    </div>
  );  

  const modalProps = {
    triggerText: 'This is a button to trigger the Modal',
    ariaLabel: 'A label describing the Modal\'s current content',
    role: 'dialog'
  };
  

  function handleOptionChange(optionName, optionValue) {
    let updatedOption = {};
    updatedOption[optionName] = optionValue;
    setSelectedOptions((prevState) => {
      return {...prevState, ...updatedOption};
    });
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
    <Layout>
      <div className="product-details">
        <Modal {...modalProps}>{modalContent}</Modal>

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
          <RentalDateSelector/>

          <hr className="divider-line"></hr>

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
        <ProductCarousel />
      </div>

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
          width: 40%;
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
      `}</style>
    </Layout>
  )
}

Product.getInitialProps = async(context) => {
  console.log(context)
  console.log("query: ", context.query)
  const id = context.query.id;
  console.log("id: ", id);
  const product = await client.product.fetch(id).then((res) => {
    console.log("id: ", id)
    console.log(res)
    return res;
  }).catch(err => console.log(err));
  
  return { product };
}