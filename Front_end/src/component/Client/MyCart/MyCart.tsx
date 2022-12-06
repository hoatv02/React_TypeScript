import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IProduct } from "../../../interface/product";
type Props = {};

const MyCart = (props: Props) => {
  const [addToCart, setAddToCart] = useState();
  const getItemLocal = localStorage.getItem("addToCart");
  const cartStrorage = getItemLocal ? JSON.parse(getItemLocal) : [];
  const handleDelete = (id: string) => {
    const filterCart = cartStrorage.filter((item: IProduct) => item._id !== id);
    localStorage.setItem("addToCart", JSON.stringify(filterCart));
    setAddToCart(filterCart);
  };

  let totalPrice = 0;
  for (let i = 0; i < cartStrorage.length; i++) {
    totalPrice +=
      Number(cartStrorage[i].price) * Number(cartStrorage[i].quantity);
    // console.log(totalPrice)
  }
  console.log(cartStrorage);
  return (
    <div className="myCart">
      <div className="shopping-cart">
        <div className="title">Shopping Bag</div>

        {cartStrorage?.length > 0 ? (
          <div>
            {cartStrorage.map((item: IProduct, index: number) => {
              return (
                <div className="item" key={index}>
                  <div>{index + 1}</div>
                  <div className="image">
                    <img
                      src={`http://localhost:3001/image/${item.image}`}
                      style={{ width: "80px", height: "80px" }}
                      alt=""
                    />
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
                  <div className="total-price">
                    Total Price : {item.price * item.quantity}
                  </div>
                  <div className="icon">
                    <button
                      className="btn btn-primary"
                      onClick={() => handleDelete(item._id)}
                      style={{
                        width: "100px",
                        marginRight: "30px",
                        backgroundColor: "#333",
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <h4 style={{ margin: "50px auto" }}>Giỏ hàng của bạn đang trống !</h4>
        )}

        <div
          className="title"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
            border: "none",
            marginTop: "10px",
          }}
        >
          Total Price :{totalPrice} VND
        </div>
        <div
          // className="title"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
            border: "none",
            marginTop: "10px",
          }}
        >
          {cartStrorage?.length > 0 && (
            <Link to="/checkout">
              <button
                className="btn btn-primary"
                style={{
                  width: "100px",
                  marginRight: "30px",
                  backgroundColor: "#333",
                }}
              >
                Continue
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyCart;
