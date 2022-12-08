import confirm from "antd/es/modal/confirm";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IProduct } from "../../../interface/product";
import { User } from "../../../interface/user";
import { RingLoader, BeatLoader } from "react-spinners";

type Props = {};

const ConfirmCart = (props: Props) => {
  const [cart, setcart] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const getItemLocal = localStorage.getItem("addToCart");
  const getCart: any = getItemLocal ? JSON.parse(getItemLocal) : [];
  let totalPrice = 0;
  for (let i = 0; i < getCart.length; i++) {
    totalPrice += Number(getCart[i].price) * Number(getCart[i].quantity);
    // console.log(totalPrice)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const onSubmit: SubmitHandler<User> = async (item) => {
    try {
      const { data } = await axios.post(`http://localhost:3001/addOrder`, item);
      localStorage.setItem("infoUserOrder", JSON.stringify(data));
      navigate("/pay");
    } catch (error) {}
  };
  return (
    <div className="confirmCart">
      <div id="wrapper">
        <div id="container" className="row">
          <div id="left-col" className="col-lg-3 itemConfirm">
            <h2>Summary</h2>
            {getCart.map((item: any, index: any) => {
              return (
                <div
                  className="item row box_listOrder"
                  key={index}
                  style={{ marginBottom: "10px" }}
                >
                  <div className="img-col col-lg-6">
                    <img
                      src={`http://localhost:3001/image/${item?.image}`}
                      alt=""
                    />
                  </div>
                  <div className="meta-col col-lg-6">
                    <p className="meta-text ">
                      Tên :{item.productName}
                      <br />
                      Số lượng : {item.quantity}
                      <br /> Price : {item.price}
                    </p>
                  </div>
                </div>
              );
            })}

            <p id="total" style={{ float: "left", margin: "10px 0" }}>
              Total :{totalPrice} VND
            </p>
          </div>
          <div id="right-col " className="col-lg-9">
            <div className="row">
              <div className="col-lg-6">
                <h2>Payment</h2>
              </div>
              <div id="logotype" className="col-lg-6">
                <img
                  id="mastercard"
                  src="http://emilcarlsson.se/assets/MasterCard_Logo.png"
                  alt=""
                />
              </div>
            </div>
            {loading ? (
              <BeatLoader color="#36d7b7" />
            ) : (
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row formConfirm">
                  <div className="col-lg-6">
                    <div className="row">
                      <div className="">
                        {" "}
                        <label>Number Phone</label>
                        {errors.phone && errors.phone.type == "required" && (
                          <span style={{ color: "red" }}>
                            Vui long nhap so dien thoai !
                          </span>
                        )}
                        <input
                          type="text"
                          className="phoneNumber"
                          {...register("phone", { required: true })}
                        />
                      </div>
                      <div className="">
                        <label>Name</label>
                        {errors.userName &&
                          errors.userName.type == "required" && (
                            <span style={{ color: "red" }}>
                              Vui long nhap ten !
                            </span>
                          )}
                        <input
                          id="cardholder"
                          type="text"
                          placeholder="John Doe"
                          {...register("userName", { required: true })}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="row">
                      <div className="">
                        <label>Address</label>
                        {errors.address &&
                          errors.address.type == "required" && (
                            <span style={{ color: "red" }}>
                              Vui long nhap dia chi !
                            </span>
                          )}
                        <input
                          type="text"
                          {...register("address", { required: true })}
                        />
                      </div>
                      <div className="">
                        <label id="cvc-label">
                          Note{" "}
                          <i
                            className="fa fa-question-circle-o"
                            aria-hidden="true"
                          ></i>
                        </label>
                        <input
                          id="cvc"
                          type="text"
                          className="cvccss"
                          {...register("note")}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <button id="purchase">Cash payment</button>
                  </div>
                  <div className="col-lg-6">
                    <button id="purchase">Payment by card</button>
                  </div>
                </div>

                {/* <button id="paypal">Pay with PayPal</button> */}
                <p id="support">
                  Having problem with checkout?{" "}
                  <a href="#">Contact our support</a>.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmCart;
