import { useRouter } from 'next/router';
import { useState } from "react";
import Client from "shopify-buy";
import { useSwipeable, Swipeable } from 'react-swipeable'

import Layout from '../../components/Layout';
import VariantSelector from '../../components/VariantSelector';
import RentalSelector from '../../components/RentalSelector';
import ProgressBar from '../../components/ProgressBar';

const client = Client.buildClient({
  domain: "closettedevelopment.myshopify.com",
  storefrontAccessToken: "e4ef2d5a0c741c17791bb1dab8cfbb2b"
});

export default function Product({ product }) {
  let variantSelectors = product.options.map((option) => {
    return (
      <VariantSelector
        handleOptionChange={handleOptionChange}
        key={option.id.toString()}
        option={option}
      />
    );
  });

  let defaultSelectedOptions = {};
  product.options.forEach((selector) => {
    defaultSelectedOptions[selector.name] = selector.values[0].value;
  });

  const [selectedOptions, setSelectedOptions] = useState(defaultSelectedOptions);
  const [imageState, setImageState] = useState({
    currentImage: 0,
    imageCount: product.images.length
  });

  console.log("current image state: ", imageState);

  function handleOptionChange(optionName, optionValue) {
    console.log("state: ", selectedOptions);
    let updatedOption = {};
    updatedOption[optionName] = optionValue;
    // setSelectedOptions({...selectedOptions, ...updatedOption});
    setSelectedOptions((prevState) => {
      console.log("prevState: ", prevState);
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
  
  return (
    <Layout>
      <div className="product">
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

        {variantSelectors}

        <RentalSelector />
      </div>

      <style jsx>{`
        .product {
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

        img {
          display: block;
          max-width: 100%;
          max-height: 500px;
        }
        
        @media only screen and (max-width: 425px) {
          img {
            width: 100%;
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