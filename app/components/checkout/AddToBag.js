import "./AddToBag.scss";

const AddToBag = ({variant, addVariantToCart}) => (
  <button onClick={() => addVariantToCart(variant.id, 1)} className="add-to-bag-btn">Add To Bag</button>
);

export default AddToBag;