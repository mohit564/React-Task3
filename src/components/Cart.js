import "./Cart.css";
import CartItem from "./CartItem";

function Cart(props) {
  const cartItems = props.cartItems;
  const total = props.total;
  const removeFromCartHandler = props.clickHandler;

  return (
    <div className="cart">
      <h2 className="cart-heading">ORDER SUMMARY</h2>
      <div className="cart-items">
        {cartItems.map((item, index) => (
          <CartItem
            key={`item${index}`}
            item={item}
            clickHandler={removeFromCartHandler}
          />
        ))}
      </div>
      <div className="cart-amount">
        <div className="cart-subtotal">
          <p>SUBTOTAL</p>
          <p className="cart-subtotal__price">{total}</p>
        </div>
        <div className="cart-shipping">
          <p>SHIPPING CHARGES</p>
          <p>FREE</p>
        </div>
        <div className="cart-total">
          <h3>TOTAL</h3>
          <h3 className="cart-total__price">{total}</h3>
        </div>
      </div>
      {cartItems.length ? <button className="checkout">CHECKOUT</button> : null}
    </div>
  );
}

export default Cart;
