import React from "react";
import ListCategory from "../../../component/Client/ListCategory/ListCategory";
import ListProduct from "../../../component/Client/ListProduct/ListProduct";
import ViewMoreProduct from "../../../component/Client/ViewMoreProduct/ViewMoreProduct";

type Props = {};

const MenuProducts = (props: Props) => {
  return (
    <div>
      <section className="food_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Our Menu</h2>
          </div>
          <div className="row">
            <div className="col-lg-6">{<ListCategory />}</div>
            <div className="col-lg-6 selectCategory">
              <select name="" id="">
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
              </select>
            </div>
          </div>
            {<ListProduct/>}
          <div className="btn-box">
          <ViewMoreProduct/>

          </div>
        </div>
      </section>
    </div>
  );
};

export default MenuProducts;
