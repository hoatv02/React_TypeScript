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
    console.log(getCart);
    return getCart;
  });
  console.log(addToCart);
  //   const notify = () =>toast.success('🦄 Wow so easy!', {
  //         position: "bottom-right",
  //         autoClose: false,
  //         hideProgressBar: true,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "dark",
  //         });
  const handlerAddCart = (item: any) => {
    setAddToCart((prev: any) => {
      const isExist = prev.some((cart: any) => item._id === cart._id);
      if (!isExist) {
        const newValue = [
          ...prev,
          { _id: item._id, image: item.image, price: item.price, quantity: 1 },
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
    toast.success('Thêm sản phẩm thành công !', {
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
    <div className="row grid ">
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
                  <h5>{item.productName}</h5>
                  <p>{item.category}</p>
                  <div className="options">
                    <h6>Price : {item.price}</h6>
                    <button
                      className="btn btn-warning"
                      onClick={() => handlerAddCart(item)}
                    >
                      Add to cart
                    </button>

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
