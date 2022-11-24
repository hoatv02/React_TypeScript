import React, { useState } from "react";
type Props = {};

const MyCart = (props: Props) => {
  const cartStrorage = localStorage.getItem("addToCart")
    ? JSON.parse(localStorage.getItem("addToCart"))
    : [];
  return (
    <div className="myCart">
      <div className="shopping-cart">
            <div className="title">Shopping Bag</div>
      {cartStrorage.map((item) => {
        return (
          
            <div className="item">
              <div className="image">
                <img src={item.image} style={{ width: "100px" }} alt="" />
              </div>

              <div className="description">
                <span>{item.productName}</span>
                {/* <span>Future Sneakers</span>
              <span>White</span> */}
              </div>

              <div className="quantity">
                <button className="plus-btn" type="button" name="button">
                  -
                </button>
                <input type="text" name="name" value="1" />
                <button className="minus-btn" type="button" name="button">
                  +
                </button>
              </div>
              <div className="total-price">{item.price}</div>
              <div className="icon">
                <div className="">Delete</div>
              </div>
            </div>
        );
      })}
          </div>

    </div>
  );
};

export default MyCart;
