import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const ConfirmCart = (props: Props) => {
  return (
    <div className="confirmCart">
      <div id="wrapper">
        <div id="container" className="row">
          <div id="left-col" className="col-md-6">
            <div id="left-col-cont">
              <h2>Summary</h2>
              <div className="item">
                <div className="img-col">
                  <img src="http://emilcarlsson.se/assets/shirt.png" alt="" />
                </div>
                <div className="meta-col">
                  <h3>Blue Ocean Shirt</h3>
                  <p className="price">$60</p>
                </div>
              </div>
              <div className="item">
                <div className="img-col">
                  <img
                    src="http://emilcarlsson.se/assets/green-shirt.png"
                    alt=""
                  />
                </div>
                <div className="meta-col">
                  <h3>Green Pine Shirt</h3>
                  <p className="price">$55</p>
                </div>
              </div>

              <div className="item">
                <div className="img-col">
                  <img src="http://emilcarlsson.se/assets/belt.png" alt="" />
                </div>
                <div className="meta-col">
                  <h3>Cow Skin Belt</h3>
                  <p className="price">$32</p>
                </div>
              </div>
              <div className="item">
                <div className="img-col">
                  <img src="http://emilcarlsson.se/assets/watch1.png" alt="" />
                </div>
                <div className="meta-col">
                  <h3>Festina Quartz Watch</h3>
                  <p className="price">$299</p>
                </div>
              </div>
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
