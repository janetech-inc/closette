import "./index.scss";
import Products from './products';
import ProductCarousel from '../components/products/ProductCarousel';
import RentalInfoSnippet from "../components/rental/RentalInfoSnippet";
import SubOptionCard from "../components/SubOptionCard";
import RentalCategories from "../components/rental/RentalCategories";

const Index = props => (  
  <div className="index">
    <div className="top-img">
      <img src="https://cdn.shopify.com/s/files/1/0278/8451/9517/products/black-bag-over-the-shoulder_925x_42f5fc8a-b06c-4ef9-8fea-3a6740a8c1e2.jpg?v=1570203482"/>
      <div className="rent-the-look">
        <button>Rent The Look</button>
      </div>
    </div>

    <div className="value-prop">
      Closette’s value prop goes here.
    </div>

    <ProductCarousel titleText="New For Rent" url="/products" />

    <div className="sub-options-container">
      <h2 className="sub-options-header">Three Ways to Enjoy Your Closette</h2>
      <SubOptionCard />
    </div>
    <RentalInfoSnippet />

    <RentalCategories />
  </div>
);

export default Index;