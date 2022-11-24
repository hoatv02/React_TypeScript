import * as React from "react";
import Switch from "@mui/material/Switch";
import Grow from "@mui/material/Grow";
import { IProduct } from "../../../interface/product";
import axios from "axios";
import { Link } from "react-router-dom";



export default function ViewMoreProduct() {
  const [checked, setChecked] = React.useState(false);
  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const [data, setData] = React.useState<IProduct[]>([]);
  React.useEffect(() => {
    (async () => {
      const { data } = await axios.get(`http://localhost:8080/product`);
      setData(data.data);
    })();
  }, []);

  return (
    <div>
      <Switch  checked={checked}  onChange={handleChange}/>
      <div
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr" ,gridGap:'10px',height:"100px"}}
        className="viewMore"
      >
        {/* <Grow in={checked}>{icon}</Grow> */}
        {data.map((item, index) => {
          return <Grow in={checked}>
             <div className="box" >
                <div className="img-box">
                <Link to={`/productDetail/${item._id}`} >
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
          </Grow>;
        })}
      </div>
    </div>
  );
}
