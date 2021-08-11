import { useState } from "react";

import Product from "./components/Product";
import Cart from "./components/Cart";
const data = require("./products.json");

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState([...data]);

  const addToCartHandler = (id) => {
    const product = products.find((product) => product.id === id);
    const cartItem = cartItems.find((cartItem) => cartItem.id === id);
    product.quantity++;
    setProducts([...products]);
    if (cartItem) {
      setCartItems([...cartItems]);
    } else {
      setCartItems([...cartItems, product]);
    }
    setTotal(total + product.price);
  };

  const removeFromCartHandler = (id) => {
    const product = products.find((product) => product.id === id);
    const itemIndex = cartItems.findIndex((item) => item.id === id);
    product.quantity--;
    setProducts([...products]);
    setTotal(total - cartItems[itemIndex].price);
    if (cartItems[itemIndex].quantity === 0) {
      cartItems.splice(itemIndex, 1);
    }
    setCartItems([...cartItems]);
  };

  return (
    <div className="container">
      <div className="content">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCartHandler={addToCartHandler}
            removeFromCartHandler={removeFromCartHandler}
          />
        ))}
      </div>
      <div className="sidebar">
        <Cart
          total={total}
          cartItems={cartItems}
          clickHandler={removeFromCartHandler}
        />
      </div>
    </div>
  );
}

export default App;
