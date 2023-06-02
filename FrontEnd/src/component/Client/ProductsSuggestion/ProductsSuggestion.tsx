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
                  <h5>Hãy nêu ý kiến của bạn về sản phẩm? </h5>
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
            src="http://www.cuisineetsentiments.com/images/hamburger_3.jpg"
            alt=""
          />
          <h5>Pizza Express</h5>
          <p>We know where the hamburger menu gets its name from but not all menu icons have to be the same. </p>
          </div>
          <div className="col-lg-4 listProductDetail_comment">
          <img
            src="https://ilfattoalimentare.it/wp-content/uploads/2015/06/Fotolia_56254409_Subscription_Monthly_M.jpg"
            alt=""
          />
          <h5>Humberguer</h5>
          <p>We know where the hamburger menu gets its name from but not all menu icons have to be the same. </p>
          </div>
          <div className="col-lg-4 listProductDetail_comment">
          <img
            src="http://upload.wikimedia.org/wikipedia/commons/6/62/NCI_Visuals_Food_Hamburger.jpg"
            alt=""
          />
          <h5>Humberguer Mui</h5>
          <p>We know where the hamburger menu gets its name from but not all menu icons have to be the same. </p>
          </div>  
        </div>
      </div>
    </div>
  );
};

export default ProductsSuggestion;
