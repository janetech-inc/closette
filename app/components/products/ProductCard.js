import "./ProductCard.scss";

const ProductCard = (props) => (
  <div className="ProductCard">
    <img className="product-img" src={props.product.image.src}/>
    <div className="product-details">
      <p className="vendor">{props.product.vendor}</p>
      <p className="title">{props.product.title}</p>
      <p className="price">${props.product.variants[0].price}</p>
    </div>
  </div>
);

export default ProductCard;