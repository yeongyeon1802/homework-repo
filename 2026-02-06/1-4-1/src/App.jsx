import { useState } from "react";
import CartList from "./components/CartList";
import ProductList from "./components/ProductList";
import "./App.css";

const PRODUCTS = [
  { id: 1, name: "사과", price: 1000 },
  { id: 2, name: "배", price: 1500 },

  { id: 3, name: "딸기", price: 500 },
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  return (
    <>
      <div className="container">
        <ProductList products={PRODUCTS} addToCart={addToCart} />
        <hr />
        <CartList cart={cart} removeFromCart={removeFromCart} total={total} />
      </div>
    </>
  );
}

export default App;
