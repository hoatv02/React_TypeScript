import React, { useEffect, useState } from "react";
import { IProduct } from "../../interface/product";
import axios from "axios";
type Props = {};

const Product = (props: Props) => {
  const [data, setData] = useState<IProduct[]>([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `https://6348bde0a59874146b0fee0c.mockapi.io/product`
      );
      setData(data);
    })();
  }, []);

  return (
    <div className="row grid ">
      {data.map((item, index) => {
        return (
          <div className="col-sm-3 col-lg-3 all pizza" key={index}>
            <div className="box">
              <div>
                <div className="img-box">
                  <img src={item.image} alt="" />
                </div>
                <div className="detail-box">
                  <h5>{item.productName}</h5>
                  <p>{item.description}</p>
                  <div className="options">
                    <h6>Price : {item.price}</h6>
                    <a href=""></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
