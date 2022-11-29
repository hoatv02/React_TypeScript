import React, { useEffect, useState } from "react";
import { IProduct } from "../../../interface/product";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
type Props = {};

const ListProduct = (props: Props) => {
  const [data, setData] = useState<IProduct[]>([]);
  const getItemLocal = localStorage.getItem("addToCart");
  const [addToCart, setAddToCart] = useState(() => {
    const getCart: any = getItemLocal ? JSON.parse(getItemLocal) : [];
    return getCart;
  });
  const handlerAddCart = (item: any) => {
    setAddToCart((prev: any) => {
      const isExist = prev.some((cart: any) => item._id === cart._id);
      if (!isExist) {
        const newValue = [
          ...prev,
          { _id: item._id, image: item.image,productName:item.productName, price: item.price, quantity: 1 },
        ];
        localStorage.setItem("addToCart", JSON.stringify(newValue));
        return newValue;
      } else {
        const index = prev.findIndex((cart: any) => cart._id === item._id);
        prev[index].quantity += 1;
        localStorage.setItem("addToCart", JSON.stringify([...prev]));
        return [...prev];
      }
    });
    toast.success("Thêm sản phẩm thành công !", {
      position: "bottom-right",
      autoClose: 1100,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    // }
  };

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`http://localhost:3001/product`);
      setData(data.data);
    })();
  }, []);

  return (
    <div className="row grid listProduct">
      {data.map((item, index) => {
        if (index < 7) {
          return (
            <div className="col-sm-6 col-lg-3 all pizza" key={index}>
              <div className="box">
                <div className="img-box">
                  <Link to={`/product/${item._id}`}>
                    <img
                      className="img_product"
                      src={`http://localhost:3001/image/${item.image}`}
                      style={{ borderRadius: "5px" }}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="detail-box">
                  <p>{item.productName}</p>
                  <p>{item.category}</p>
                  <div className="options row">
                    <div className=" col-lg-6">
                      <p className="productList_price">Price : {item.price}</p>
                    </div>
                    <div className="col-lg-6">
                      <button
                        className="btn btn-warning addToCart"
                        onClick={() => handlerAddCart(item)}
                      >
                        Thêm vào...
                      </button>
                    </div>

                    {/* <button onClick={notify}>HHH</button> */}
                    <ToastContainer
                      position="bottom-right"
                      autoClose={5000}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                      theme="dark"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default ListProduct;
