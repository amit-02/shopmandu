import "./App.css";
import Header from "./components/Header";
import Product from "./Views/Product";
import { useState } from "react";

function App() {
  const [cartItem, setCartItem] = useState([]);

  const handleAddToCart = (product) => {
    if (cartItem.some((item) => item.id === product.id)) {
      //increase quantity
      const newItem = cartItem.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      setCartItem(newItem);
    } else {
      //new push
      setCartItem([...cartItem, { ...product, quantity: 1 }]);
    }
  };

  const handleDelete = (product) => {
    const findObject = cartItem.find((item) => item.id === product.id);

    if (findObject) {
      if (findObject.quantity > 1) {
        const newItem = cartItem.map((item) => {
          if (item.id === findObject.id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
        setCartItem(newItem);
      } else {
        const newCartArray = cartItem.filter((item) => item.id != product.id);
        setCartItem(newCartArray);
      }
    }
  };

  //number of quantity
  const getCartValue = (product) => {
    const cartQuantity = cartItem.find((item) => item.id === product.id);
    return cartQuantity?.quantity || 0;
  };

  const getTotalAmount = (price) => {};

  return (
    <div className="App">
      <Header
        cartItem={cartItem}
        getCartValue={getCartValue}
        handleAddToCart={handleAddToCart}
        handleDelete={handleDelete}
      />
      <Product
        handleAddToCart={handleAddToCart}
        handleDelete={handleDelete}
        cartItem={cartItem}
        getCartValue={getCartValue}
      />
    </div>
  );
}

export default App;
