import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IProduct } from "../../../../interface/product";
import { User } from "../../../../interface/user";
import styles from "./PaySuccessFull.module.css";

type Props = {};
const PaySuccessFull = (props: Props) => {
  const [pay, setPay] = useState<User>();
  const getItemLocal = localStorage.getItem("addToCart");
  const getCart: any = getItemLocal ? JSON.parse(getItemLocal) : [];
  const getInfo: any = localStorage.getItem("infoUserOrder");
  const getInfoUser = JSON.parse(getInfo);
  
  return (
    <div className={styles.boxx}>
      <div className={styles.boxHeader}>
        <div className={styles.previous}>
          {/* <ArrowBackIosNewIcon /> */}
          <i className="fa-solid fa-left-long"></i>
        </div>
        <div className={styles.logo}>
          <img src="../../../../../style/images/img_319605.png" />
          <p>Thanh Toán Thành Công</p>
        </div>
        <div className="info">{getInfoUser.data.userName}</div>
        <div className="content_product_pay">
          {getCart.map((item: IProduct, index: number) => {
            return (
              <div className="content_pay">
                <div className="image_product"></div>
                <div className="listPay">
                  <table className="table" style={{ margin: "0px" }}>
                    <tbody>
                      <tr>
                        <th scope="row" className="tablecss">
                          <img
                            src={`http://localhost:3001/image/${item?.image}`}
                            alt=""
                            style={{ width: "30px" }}
                          />
                        </th>
                        <td className="tablecss">{item.productName}</td>
                        <td className="tablecss">{item.price} VND</td>
                        <td className="tablecss">X{item.quantity}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.content}>
          <p>Cảm ơn bạn đã tin tưởng !!!</p>
        </div>
      </div>{" "}
      <div className={styles.home}>
        <Link to="/">
          {" "}
          <button className="btn_home" onClick={()=>(localStorage.removeItem("addToCart"))}>
            Về Trang Chủ
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PaySuccessFull;
