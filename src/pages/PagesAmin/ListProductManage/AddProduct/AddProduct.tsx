import axios from "axios";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { IProduct } from "../../../../interface/product";

type Props = {};
const AddProduct = (props: Props) => {
  const [files,setFiles] = useState<IProduct[]>([])
  const [image,setImage] = useState()
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProduct>();
  const onSubmit: SubmitHandler<IProduct> = async (product) => {
    try {
      const { data } = await axios.post(
        `http://localhost:8080/product`,
        product
      );
      console.log("data", data);
      navigate("/admin/product");
    } catch (error) {}
  };
  return (
    <div className="container-fluid px-4 addProductInfo">
      <div className="title_product">
        <div className="">
          <h1 className="mt-4">Thêm mới sản phẩm</h1>
        </div>
        <div className="addProduct">
          <Link
            type="button"
            to="/admin/addProduct"
            className="btn btn-success"
          >
            Thêm mới
          </Link>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-sm-6">
            <div className="">
              <label className="col-sm-2 col-form-label">ProductName</label>
              <br />
              <input
                type="text"
                className="form-control"
                {...register("productName")}
              />
            </div>
            <div className="">
              <label className="col-sm-2 col-form-label">Price</label>
              <br />
              <input
                type="text"
                className="form-control"
                id=""
                {...register("price")}
              />
            </div>
            <div className="">
              <label className="col-sm-2 col-form-label">Image</label>
              <br />
              <input
                type="text"
                className="form-control"
                {...register('image')}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="">
              <label className="col-sm-2 col-form-label">Category</label>
              <br />
              <select
                className="form-select"
                aria-label="Default select example"
                {...register("category")}
              >
                <option selected>Open this select menu</option>
                <option value="One">One</option>
                <option value="Two">Two</option>
                <option value="Three">Three</option>
              </select>
            </div>

            <div className="">
              <label className="col-sm-2 col-form-label">Description</label>
              <br />
              <textarea
                className="form-control"
                id="inputProductName"
                {...register("description")}
                cols={10}
                rows={4}
              />
            </div>
          </div>
        </div>
        <button className="btn btn-success btnAdd" >Thêm mới</button>
      </form>
    </div>
  );
};

export default AddProduct;
