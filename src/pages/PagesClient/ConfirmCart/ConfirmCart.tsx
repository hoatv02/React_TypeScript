import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IProduct } from "../../../interface/product";

type Props = {};

const ConfirmCart = (props: Props) => {
  const [cart, setcart] = useState<IProduct[]>([]);
  const getItemLocal = localStorage.getItem("addToCart");
  const cartStrorage = getItemLocal ? JSON.parse(getItemLocal) : [];
  const items = cartStrorage.quantity
  console.log(items)
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`http://localhost:3001/product`);
        // console.log(data.data);
        setcart(data.data)
      } catch (error) {}
    })();
  }, []);
  return (
    <div className="confirmCart">
      <div id="wrapper">
        <div id="container" className="row">
          <div id="left-col" className="col-md-6">
            <div id="left-col-cont">
              <h2>Summary</h2>
              {cart.map((item, index) => {
                return (
                  <div className="item" key={index} style={{marginBottom:"10px"}}>
                    <div className="img-col">
                    <img src={`http://localhost:3001/image/${item?.image}`} style={{ width: "80%" }} alt="" />
                    </div>
                    <div className="meta-col">
                      <h3>{item.productName}</h3>
                      <p className="price">{item.quantity}</p>
                      <p className="price">{item.price}</p>
                    </div>
                  </div>
                );
              })}

              <p id="total">Total : </p>
            </div>
          </div>
          <div id="right-col" className="col-md-6">
            <h2>Payment</h2>
            <div id="logotype">
              <img
                id="mastercard"
                src="http://emilcarlsson.se/assets/MasterCard_Logo.png"
                alt=""
              />
            </div>

            <form action="">
              <label>Number Phone</label>
              <input type="text" className="phoneNumber" />

              <label>Name</label>
              <input id="cardholder" type="text" placeholder="John Doe" />
              <label>Address</label>
              <input type="text" />

              <label id="cvc-label">
                CVC{" "}
                <i className="fa fa-question-circle-o" aria-hidden="true"></i>
              </label>
              <input
                id="cvc"
                type="text"
                placeholder="123"
                maxLength={3}
                className="cvccss"
              />
              <button id="purchase">Confirm</button>
              <button id="paypal">Pay with PayPal</button>
              <p id="support">
                Having problem with checkout?{" "}
                <a href="#">Contact our support</a>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmCart;
