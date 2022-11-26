import React, { useEffect, useState } from "react";
import { IProduct } from "../../../interface/product";
import axios from "axios";
import { Link } from "react-router-dom";
type Props = {};

const ListProduct = (props: Props) => {
  const [data, setData] = useState<IProduct[]>([]);
  const [addToCart, setAddToCart] = useState(() => {
    const getCart: any = localStorage.getItem("addToCart")
      ? JSON.parse(localStorage.getItem("addToCart"))
      : [];
    return getCart;
  });
  const handlerAddCart = (item: any) => {
    setAddToCart((prev) => [...prev, item]);
    localStorage.setItem("addToCart", JSON.stringify(addToCart));
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
                      src={item.image}
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
