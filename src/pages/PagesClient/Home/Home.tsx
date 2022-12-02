import React, { useEffect, useState } from "react";
import axios from "axios";
import { IProduct } from "../../../interface/product";
import { ICategory } from "../../../interface/category";
import { Link } from "react-router-dom";
import ListCategory from "../../../component/Client/ListCategory/ListCategory";
import ListProduct from "../../../component/Client/ListProduct/ListProduct";
import ViewMoreProduct from "../../../component/Client/ViewMoreProduct/ViewMoreProduct";
type Props = {};

const Home = (props: Props) => {
  return (
    <div className="container-body">
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="8000">
            <img
              src="../../../../style/images/pizza.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption pizza d-none d-md-block">
              <h5>Nhà hàng thức ăn ngon !</h5>
              <p>
                Triệu tập ngay hội yêu Pizza và ghiền shopping, mau mau tới shop
                gần nhất hoặc gọi liền tới hotline 1900 1822 tiếp nguồn năng
                lượng để “ săn hàng ” cùng anh cùng chị. Ngồi nhà mà vẫn ăn no,
                chẳng cần lo tốn kém, vì Pizza Hut khao bạn tận 50 % – tin nổi
                không, chỉ từ 101.500 VNĐ bạn sẽ có ngay một phần PIZZA ( * )
                tuyệt ngon cho một ngày shopping hoành tráng . Rủ rê hội “ săn
                marketing ” cùng nạp nguồn năng lượng với Pizza ngon. Chớp Deal
                ngay, đừng bỏ lỡ !
              </p>
              <a href="" className="orderNowHome">
                Order Now
              </a>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="8000">
            <img
              src="../../../../style/images/912620.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption pizza2 d-none d-md-block">
              <h5>Ưu đãi áp dụng từ 22/11/2022 – 30/11/2022</h5>
              <p>
                Còn gì đãaaaa bằng đặt #ThePizzaCompany mà được giảm ngay 50%
                giá! Không cần đi xa, chỉ cần ngồi nhà gọi Pizza, là có Pizza
                nóng-giòn ăn thả gaaaaaaa!!
              </p>
              <a href="" className="orderNowHome">
                Order Now
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="../../../../style/images/beef.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption beef d-none d-md-block">
              <h5>Game show diễn ra từ hôm nay đến hết ngày 20/12/2022</h5>
              <p>
                Store sẽ cho ra 1 món PIZZA bất kì và bạn sẽ được bịt mắt khi ăn
                1 miếng đầu tiên ( 1/6 miếng pizza size 21cm). Và sau khi ăn
                khách hàng sẽ đoán xem là mình đã ăn chiếc PiZZA gì , thuộc loại
                nào trên menu. Nếu khách đoán đúng thì tất nhiên chiếc PIZZA
                khách đang ăn đã được FREE rồi ạ. NGƯỢC LẠI nếu không đoán được
                đúng thì khách sẽ phải hoàn trả đầy đủ số tiền chiếc bánh mà
                mình đã ăn cho Store .
              </p>
              <a href="" className="orderNowHome">
                Order Now
              </a>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <section className="offer_section layout_padding-bottom">
        <div className="offer_container">
          <div className="container ">
            <div className="row">
              <div className="col-md-6  ">
                <div className="box ">
                  <div className="img-box">
                    {/* <img src="../../../images/o1.jpg" alt=""/> */}
                    <img src="../../../style/images/o1.jpg" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Tasty Thursdays</h5>
                    <h6>
                      <span>20%</span> Off
                    </h6>
                    <a href="" className="orderNowHome">
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6  ">
                <div className="box ">
                  <div className="img-box">
                    <img src="../../../style/images/o2.jpg" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Pizza Days</h5>
                    <h6>
                      <span>15%</span> Off
                    </h6>
                    <a href="" className="orderNowHome">
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="food_section layout_padding-bottom">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Our Menu</h2>
          </div>
          {<ListCategory />}
          <div className="filters-content listProduct">{<ListProduct />}</div>
          {/* <div className="btn-box"><a href="">View More</a></div> */}
        </div>
      </section>
      <section className="about_section layout_padding">
        <div className="container  ">
          <div className="row">
            <div className="col-md-6 ">
              <div className="img-box">
                <img src="../../../../style/images/912620.jpg" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>We Are Feane</h2>
                </div>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text. All
                </p>
                <a href="" className="orderNowHome">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="book_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Book A Table</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form_container">
                <form action="">
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                    />
                  </div>
                  <div>
                    <select className="form-control nice-select wide">
                      <option value="" disabled selected>
                        How many persons?
                      </option>
                      <option value="">2</option>
                      <option value="">3</option>
                      <option value="">4</option>
                      <option value="">5</option>
                    </select>
                  </div>
                  <div>
                    <input type="date" className="form-control" />
                  </div>
                  <div className="btn_box">
                    <button className="orderNowHome">Book Now</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <div className="map_container ">
                <div id="googleMap"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="client_section layout_padding-bottom">
        <div className="container">
          <div className="heading_container heading_center psudo_white_primary mb_45">
            <h2>What Says Our Customers</h2>
          </div>
          <div className="carousel-wrap row ">
            <div className="owl-carousel client_owl-carousel">
              <div className="item">
                <div className="box">
                  <div className="detail-box">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam
                    </p>
                    <h6>Moana Michell</h6>
                    <p>magna aliqua</p>
                  </div>
                  <div className="img-box">
                    <img src="images/client1.jpg" alt="" className="box-img" />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="box">
                  <div className="detail-box">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam
                    </p>
                    <h6>Mike Hamell</h6>
                    <p>magna aliqua</p>
                  </div>
                  <div className="img-box">
                    <img src="images/client2.jpg" alt="" className="box-img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
