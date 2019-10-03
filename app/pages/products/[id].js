import { useRouter } from 'next/router';
import Client from "shopify-buy";
import Layout from '../../components/Layout';
import VariantSelector from '../../components/VariantSelector';
import RentalSelector from '../../components/RentalSelector';

const client = Client.buildClient({
  domain: "graphql.myshopify.com",
  storefrontAccessToken: "dd4d4dc146542ba7763305d71d1b3d38"
});

export default function Product({ product }) {
  let variantSelectors = product.options.map((option) => {
    return (
      <VariantSelector
        // handleOptionChange={this.handleOptionChange}
        key={option.id.toString()}
        option={option}
      />
    );
  });
  return (
    <Layout>
      <div className="product">
        <img src={product.images[0].src} alt={`${product.title} product shot`}/>
      
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

// const Product = product => (
//   <Layout>
//     <img src={product.images[0].src} alt={`${product.title} product shot`}/>
  
//     <div className="details">
//       <p className="vendor">{props.vendor}</p>
//       <p className="title">{props.title}</p>
//       <p className="price">${props.variants[0].price}</p>
//     </div>
//   </Layout>
// );

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