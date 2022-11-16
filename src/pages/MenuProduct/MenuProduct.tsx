import React from "react";
import Category from "../../component/Category/Category";
import Product from "../../component/Product/Product";

type Props = {};

const Products = (props: Props) => {
  return (
    <div>
      <section className="food_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Our Menu</h2>
          </div>
          {<Category />}
          <div className="filters-content">
                {<Product />}
          </div>
          <div className="btn-box">
            <a href="">View More</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
