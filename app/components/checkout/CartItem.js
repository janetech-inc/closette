const CartItem = ({item}) => (
  <div>
    <p>{item.title}</p>
    <p>{item.variant.title}</p>
  </div>
);

export default CartItem;