import React from "react";
import ListCategory from "../../../component/Client/ListCategory/ListCategory";
import ListProduct from "../../../component/Client/ListProduct/ListProduct";

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
              <select className="form-select" aria-label="Default select example">
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          {<ListProduct />}
          <div className="btn-box"></div>
        </div>
      </section>
    </div>
  );
};

export default MenuProducts;
