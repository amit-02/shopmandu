import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Product.css";

const Product = () => {
  const url = `https://electronic-ecommerce.herokuapp.com/api/v1/product`;

  const [products, setProducts] = useState({
    loading: false,
    data: [],
    error: false,
  });
  useEffect(() => {
    setProducts({
      loading: true,
      data: [],
      error: false,
    });
    axios
      .get(url)
      .then((response) => {
        setProducts({
          loading: false,
          data: response.data.data.product,
          error: false,
        });
      })
      .catch(() => {
        setProducts({
          loading: false,
          data: [],
          error: true,
        });
      });
  }, [url]);
  let content = null;

  if (products.error) {
    content = <p>there was error</p>;
  }

  //   if (products.loading) {
  //     content = <Loader></Loader>;
  //   }
  if (products.data) {
    // console.log(products.data);
    content = (
      <div>
        <h1>{products.data.name}</h1>
      </div>
    );
  }

  return (
    <div>
      <h3>Products</h3>
      <button className=" product-filter-button">filter</button>
      {console.log(products.data)}
      <div className="products">
        {products.data.map((item) => (
          <>
            <div className="card d-inline-block">
              <div>
                <img
                  className="product-image"
                  src="https://electronic-ecommerce.herokuapp.com/fantechHeadset.jpg"
                  alt={item.name}
                />
              </div>
              <div className="product-name">
                <h6>{item.name}</h6>
              </div>
              <div className="product-price">{item.price}</div>

              <div className="add-minus-quantity">
                <i className="fas fa-minus minus" aria-hidden="true"></i>
                <input type="text" placeholder="2" />
                <i className="fas fa-plus plus" aria-hidden="true"></i>
              </div>

              <div className="product-stock">
                <span>stock left: {item.stock}</span>
              </div>
              <div className="product-date">
                <span>Released on: 22-02-2022</span>
              </div>

              <div>
                <button className="product-add-button">Add to Cart</button>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Product;
