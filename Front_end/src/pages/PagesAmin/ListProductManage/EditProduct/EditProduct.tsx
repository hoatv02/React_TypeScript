import axios from "axios";
import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IProduct } from "../../../../interface/product";

type Props = {};

const EditProduct = (props: Props) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IProduct>();

  const {id} = useParams();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`http://localhost:3001/product/`+ id);
        // console.log(data)
        reset(data.data);
      } catch (error) {}
    })();
  }, []);
  
  const onSubmit: SubmitHandler<IProduct> = async (product) => {
    // console.log(product.FileList);
    try {
      const { data } = await axios.put(
        `http://localhost:3001/product/${id}`,product
      );
      navigate("/admin/product");
    } catch (error) {}
  };
  return (
    <div className="container-fluid px-4 addProductInfo">
      <div className="title_product">
        <div className="">
          <h1 className="mt-4">Chỉnh sửa sản phẩm</h1>
        </div>
        <div className="addProduct">
          {/* <Link
            type="button"
            to="/admin/addProduct"
            className="btn btn-success"
          >
            Thêm mới
          </Link> */}
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
              <label className="col-sm-2 col-form-label">Quantity</label>
              <br />
              <input
                type="text"
                className="form-control"
                id=""
                {...register("quantity")}
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
                <option value="Pizza">Pizza</option>
                <option value="Bugger">Bugger</option>
                <option value="Meats">Meats</option>
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
        <button className="btn btn-success btnAdd">Chỉnh sửa</button>
      </form>
    </div>
  );
};

export default EditProduct;
