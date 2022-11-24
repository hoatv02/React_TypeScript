import { Button } from "@mui/material";
import React from "react";

type Props = {};

const ProductsSuggestion = (props: Props) => {
  return (
    <div className="row" style={{backgroundColor:"#333",marginBottom:"1px"}}>
      <div className="col-md-6" >
        <div className="">
          <div className="col-lg-3" style={{ textAlign: "center" }}>
            <div className="">
              <img src="" alt="" />
              <p className=""></p>
            </div>
          </div>
          <div className="col-lg-9" >
              <div className="form-floating">
              <textarea className="form-control" placeholder="Enter" id="floatingTextarea"></textarea>
              </div>
              <h5 style={{padding:"5px 0",color:"#FFFFFF",fontSize:"13px"}}>Đánh giá chất lượng sản phẩm</h5>
            <div className="" style={{marginBottom:"20px"}}>
              <Button variant="contained" style={{backgroundColor:"#ffbe33",fontSize:"8px",height:"17px"}}>Chỉnh Sửa</Button>
              <Button variant="contained" style={{marginLeft:"10px",backgroundColor:"#ffbe33",fontSize:"8px",height:"17px"}}>Xóa</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6">List</div>
    </div>
  );
};

export default ProductsSuggestion;
