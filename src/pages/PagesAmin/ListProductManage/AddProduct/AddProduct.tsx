import axios from "axios";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { IProduct } from "../../../../interface/product";

type Props = {};
const AddProduct = (props: Props) => {
  const [files, setFiles] = useState<IProduct[]>([]);
  const [image, setImage] = useState("");

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProduct>();

  const handleImageChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const onSubmit: SubmitHandler<IProduct> = async (product) => {
    try {
      const formData = new FormData()
      const fileName = product.image[0].name
      formData.append('name',fileName)
      formData.append('image',product.image[0])
      await axios.post(`http://localhost:3001/uploadFile`,formData)
      product.image = product.image[0].name

      const { data } = await axios.post(
        `http://localhost:3001/product`,
        product
      );
      
      // console.log("data", data);
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
                type="file"
                multiple={false}
                {...register("image")}
                onChange={handleImageChange}
              />
              {image && <img src={image} width='100' height='100' />}
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
        <button className="btn btn-success btnAdd">Thêm mới</button>
      </form>
    </div>
  );
};

export default AddProduct;
