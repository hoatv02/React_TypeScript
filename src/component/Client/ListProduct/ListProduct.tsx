import React, { useEffect, useState } from "react";
import { IProduct } from "../../../interface/product";
import axios from "axios";
import { Link } from "react-router-dom";
type Props = {};

const ListProduct = (props: Props) => {
  const [data, setData] = useState<IProduct[]>([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`http://localhost:8080/product`);
      setData(data.data);
    })();
  }, []);

  return (
    <div className="row grid ">
      {data.map((item, index) => {
        return (
          <Link to={`/productDetail/${item._id}`}>
            <div className="col-sm-6 col-lg-3 all pizza" key={index}>
              <div className="box">
                <div className="img-box">
                  <img className="img_product" src={item.FileList} alt="" />
                </div>
                <div className="detail-box">
                  <h5>{item.productName}</h5>
                  {/* <p>{item.description}</p> */}
                  <p>{item.category}</p>
                  <div className="options">
                    <h6>Price : {item.price}</h6>
                    <a href=""></a>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ListProduct;
