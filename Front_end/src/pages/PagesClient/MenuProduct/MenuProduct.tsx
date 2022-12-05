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
            {<ListCategory />}
           
          </div>
          {<ListProduct />}
          <div className="btn-box"></div>
        </div>
      </section>
    </div>
  );
};

export default MenuProducts;
