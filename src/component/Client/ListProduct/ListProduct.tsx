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
    <div className="row grid listProduct">
      {data.map((item, index)  => {
        if(index <8){
          return (
          
            <div className="col-sm-6 col-lg-3 all pizza" key={index}>
              <div className="box">
                <div className="img-box">
                <Link to={`/productDetail/${item._id}`}>
                  <img className="img_product" src={item.image} style={{borderRadius:"5px"}} alt="" />
               </Link>
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
        );
        }
        
      })}
    </div>
  );
};

export default ListProduct;
