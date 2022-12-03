import React ,{useEffect} from "react";
import { Button } from "@mui/material";

type Props = {};

const ProductsSuggestion = (props: Props) => {
  useEffect(() =>{

  })
  return (
    <div className="row" style={{ marginBottom: "1px", backgroundColor: "#" }}>
      <div className="col-md-6">
        <section id="app">
          <div className="container_comment">
            <div className="row">
              <div className="col-6">
                <div className="comment_detail">
                  <h5>Hãy nêu ý kiến của bạn về sản phẩm ? </h5>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <textarea
                  className="input"
                  cols={40}
                  rows={7}
                  placeholder="Write a comment
                  Yet another comment...
                  Hi.Welcome to Pizza !
                  "
                  v-model="newItem"
                ></textarea>
                <button className="primaryContained float-right" type="submit">
                  Add Comment
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="col-md-6">
        <div className="row">
          <div className="col-lg-4 listProductDetail_comment">
          <img
            src="https://scontent.fhan5-1.fna.fbcdn.net/v/t39.30808-6/318218750_6855264907852704_7346251176104172439_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=730e14&_nc_ohc=0xRdJoXQL5MAX_WQEzm&_nc_ht=scontent.fhan5-1.fna&oh=00_AfDO5E0SHrX5I_NnnOlBzlB_zGP_ub2TOqZjfWxs8Pnt-Q&oe=638F701C"
            alt=""
          />
          <h5>Title</h5>
          <p>Hãy nêu ý kiến của bạn về sản phẩm ?</p>
          </div>
          <div className="col-lg-4 listProductDetail_comment">
          <img
            src="https://scontent.fhan5-1.fna.fbcdn.net/v/t39.30808-6/318218750_6855264907852704_7346251176104172439_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=730e14&_nc_ohc=0xRdJoXQL5MAX_WQEzm&_nc_ht=scontent.fhan5-1.fna&oh=00_AfDO5E0SHrX5I_NnnOlBzlB_zGP_ub2TOqZjfWxs8Pnt-Q&oe=638F701C"
            alt=""
          />
          <h5>Title</h5>
          <p>Hãy nêu ý kiến của bạn về sản phẩm ?</p>
          </div>
          <div className="col-lg-4 listProductDetail_comment">
          <img
            src="https://scontent.fhan5-1.fna.fbcdn.net/v/t39.30808-6/318218750_6855264907852704_7346251176104172439_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=730e14&_nc_ohc=0xRdJoXQL5MAX_WQEzm&_nc_ht=scontent.fhan5-1.fna&oh=00_AfDO5E0SHrX5I_NnnOlBzlB_zGP_ub2TOqZjfWxs8Pnt-Q&oe=638F701C"
            alt=""
          />
          <h5>Title</h5>
          <p>Hãy nêu ý kiến của bạn về sản phẩm ?</p>
          </div>  
        </div>
      </div>
    </div>
  );
};

export default ProductsSuggestion;
