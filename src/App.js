import "./App.css";
import Header from "./components/Header";
import Product from "./Views/Product";
import Cart from "./components/Cart";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <Product />
      <Cart />
    </div>
  );
}

export default App;
