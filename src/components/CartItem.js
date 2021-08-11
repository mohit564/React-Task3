import "./CartItem.css";

function CartItem(props) {
  const { id, name, image, price, quantity } = props.item;
  const removeFromCartHandler = props.clickHandler;

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={image} alt={`item${id}`} />
      </div>
      <div className="cart-item-details">
        <div className="cart-item-name">
          <p>{name}</p>
        </div>
        <div className="cart-item-cta">
          <div className="cart-item-cost">
            <div className="cart-item-quantity">
              <b>Quantity: </b>
              <p>{quantity}</p>
            </div>
            <div className="cart-item-price">
              <b>Price: </b>
              <p>{price * quantity}</p>
            </div>
          </div>
          <div className="cart-item-button">
            <button
              className="fa fa-trash"
              onClick={removeFromCartHandler.bind(null, id)}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
