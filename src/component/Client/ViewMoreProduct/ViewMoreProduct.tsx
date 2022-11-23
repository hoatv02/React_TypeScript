import * as React from "react";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import Paper from "@mui/material/Paper";
import Grow from "@mui/material/Grow";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Theme } from "@mui/material/styles";
import { Button, Grid } from "@mui/material";
import { IProduct } from "../../../interface/product";
import axios from "axios";
import { Link } from "react-router-dom";

const icon = (
  <Paper sx={{ m: 1 }} elevation={4}>
    <Box component="svg" sx={{ width: 300, height: 200 }}>
      <Box
        component="polygon"
        sx={{
          fill: (theme: Theme) => theme.palette.common.white,
          stroke: (theme) => theme.palette.divider,
          strokeWidth: 1,
        }}
        points="0,100 50,00, 100,100"
      />
    </Box>
  </Paper>
);

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
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="View more"
      />
      <Box
        sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr" ,gridGap:'10px'}}
        className="viewMore"
      >
        {/* <Grow in={checked}>{icon}</Grow> */}
        {data.map((item, index) => {
          return <Grow in={checked}>
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
          </Grow>;
        })}
      </Box>
    </div>
  );
}
