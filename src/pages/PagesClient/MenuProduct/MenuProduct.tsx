import React from "react";
import Category from "../../../component/Client/Category/Category";
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
          {<Category />}
          <div className="filters-content">
            {<ListProduct/>}
          </div>
          <div className="btn-box">
            <a href="">View More</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenuProducts;
