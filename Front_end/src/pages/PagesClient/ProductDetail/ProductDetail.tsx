import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductsSuggestion from "../../../component/Client/ProductsSuggestion/ProductsSuggestion";
import { IProduct } from "../../../interface/product";

type Props = {};

const ProductDetail = (props: Props) => {
  const [product, setProduct] = useState<IProduct>();
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`http://localhost:3001/product/${id}`);
        setProduct(data.data);
      } catch (error) {}
    })();
  });

  return (
    <div>
      <section className="about_section layout_padding about_section_detail ">
        <div className="container  ">
          <div className="row" style={{ fontSize: "12px" }}>
            <div className="col-md-6 ">
              <div className="img-box">
              
                <img src={`http://localhost:3001/image/${product?.image}`} style={{borderRadius:"15px",boxShadow:"1px 2px 5px #000"}}  alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>{product?.productName}</h2>
                </div>
                <p>Giá : {product?.price}</p>
                <p>Mô tả :{product?.description}</p>
                <a href="">Mua hàng</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProductsSuggestion />
    </div>
  );
};

export default ProductDetail;
