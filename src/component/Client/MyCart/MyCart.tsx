import React, { useEffect, useState } from "react";
import { IProduct } from "../../../interface/product";
type Props = {};

const MyCart = (props: Props) => {
  const cartStrorage = localStorage.getItem("addToCart")
    ? JSON.parse(localStorage.getItem("addToCart"))
    : [];

    useEffect(() => {

    },[])
    const handleDelete = (id:string) => {
      console.log(id)
      const filterCart = cartStrorage.filter((item)=> item._id !== id) 
      console.log(filterCart)
      localStorage.setItem('addToCart',JSON.stringify(filterCart))
      
    }
  return (
    <div className="myCart">
      <div className="shopping-cart">
            <div className="title">Shopping Bag</div>
      {cartStrorage.map((item:IProduct,index:number) => {
        return (
          
            <div className="item" key={index}>
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
                <button className="" onClick={() =>handleDelete(item._id)}>Delete</button>
              </div>
            </div>
        );
      })}
          </div>

    </div>
  );
};

export default MyCart;
