import "./Product.css";

function Product(props) {
  const { id, name, author, image, description, price, quantity } =
    props.product;
  const addToCartHandler = props.addToCartHandler;
  const removeFromCartHandler = props.removeFromCartHandler;

  return (
    <div className="product">
      <div className="product-image">
        <img src={image} alt={`product${id}`} />
      </div>
      <div className="product-details">
        <div className="product-name">
          <h2>{name}</h2>
        </div>
        <div className="product-author">
          <p>{author}</p>
        </div>
        <div className="product-description">
          <p>{description}</p>
        </div>
        <div className="product-cta">
          <div className="product-price">
            <h2>{price}</h2>
          </div>
          <div className="product-button">
            <button
              className="fa fa-plus"
              onClick={addToCartHandler.bind(null, id)}
            ></button>
            <input type="text" value={quantity} readonly />
            <button
              className="fa fa-minus"
              onClick={removeFromCartHandler.bind(null, id)}
              disabled={!quantity}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
