import React, { useEffect, useState } from "react";
import { IProduct } from "../../../interface/product";
type Props = {};

const MyCart = (props: Props) => {
  const [addToCart, setAddToCart] = useState();
  const cartStrorage = localStorage.getItem("addToCart")
    ? JSON.parse(localStorage.getItem("addToCart"))
    : [];

  
  const handleDelete = (id: string) => {
    const filterCart = cartStrorage.filter((item: IProduct) => item._id !== id);
    localStorage.setItem("addToCart", JSON.stringify(filterCart));
    setAddToCart(filterCart);
  };
  

  return (
    <div className="myCart">
      <div className="shopping-cart">
        <div className="title">Shopping Bag</div>
        {cartStrorage.map((item: IProduct, index: number) => {
          return (
            <div className="item" key={index}>
              <div>{index + 1}</div>
              <div className="image">
                <img src={item.image} style={{ width: "100px" }} alt="" />
              </div>
              <div className="description">
                <span>{item.productName}</span>
              </div>
              <div className="quantity">
                <button className="plus-btn" type="button" name="button">
                  -
                </button>
                <span> {item.quantity} </span>
                <button className="minus-btn" type="button" name="button">
                  +
                </button>
              </div>
              <div className="total-price">Total Price : {item.price}</div>
              <div className="icon">
                <button className="" onClick={() => handleDelete(item._id)}>
                  Delete
                </button>
              </div>
            </div>
          );

        })}
      </div>
    </div>
  );

};

export default MyCart;
