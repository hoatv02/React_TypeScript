import React from "react";
type Props = {};

const MyCart = (props: Props) => {
  return (
    <div className="myCart">
      <div className="shopping-cart">
        <div className="title">Shopping Bag</div>

        <div className="item">
          <div className="image">
            <img src="https://tse1.mm.bing.net/th?id=OIP.lKiWASweuATY-A9By-2U5gHaE8&pid=Api&P=0" style={{width:"100px"}} alt="" />
          </div>

          <div className="description">
            <span>Maison Margiela</span>
            <span>Future Sneakers</span>
            <span>White</span>
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
          <div className="total-price">$870</div>
          <div className="icon">
                <div className="">Delete</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MyCart;
