import axios from "axios";
import React, { useState,useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IProduct } from "../../../../interface/product";

type Props = {};
const EditProduct = (props: Props) => {
  const [files, setFiles] = useState<IProduct[]>([]);
  const [image, setImage] = useState("");
  const [product, setProduct] = useState<IProduct[]>([]);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,reset,
    formState: { errors },
  } = useForm<IProduct>();
  const {id} = useParams();
  const handleImageChange = function (e: any) {
    setImage(URL.createObjectURL(e.target.files[0]));
  };
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`http://localhost:3001/product/${id}`);
        // console.log(data.data);
        reset(data.data);
      } catch (error) {}
    })();
  }, []);

  const onSubmit: SubmitHandler<IProduct> = async (product) => {
    try {
      const formData = new FormData()
      const fileName = product.image[0].name
      formData.append('name',fileName)
      formData.append('image',product.image[0])
      await axios.post(`http://localhost:3001/uploadFile`,formData)
      product.image = product.image[0].name

      const { data } = await axios.put(
        `http://localhost:3001/product/${id}`,
        product
      );
      alert("chỉnh sửa sản phẩm thành công")
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
            to="/admin/product"
            className="btn btn-success"
          >
            Quay lại 
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
                {...register("productName", { required: true,minLength:6 })}
              />
              {errors.productName && errors.productName.type == "required" && (
                <p>Vui lòng nhập tên sản phẩm !</p>
              )}
              {errors.productName && errors.productName.type == "minLength" && (
                <p>Tên sanr phẩm tối thiểu 6 kí tự !</p>
              )}
            </div>
            <div className="">
              <label className="col-sm-2 col-form-label">Price</label>
              <br />
              <input
                type="text"
                className="form-control"
                id=""
                {...register("price", { required: true })}
              />
              {errors.price && errors.price.type == "required" && (
                <p>Vui lòng nhập giá sản phẩm !</p>
              )}
            </div>
            <div className="">
              <label className="col-sm-2 col-form-label">Quantity</label>
              <br />
              <input
                type="text"
                className="form-control"
                id=""
                {...register("quantity", { required: true })}
              />
              {errors.price && errors.price.type == "required" && (
                <p>Vui lòng nhập giá sản phẩm !</p>
              )}
            </div>
            <div className="">
              <label className="col-sm-2 col-form-label">Image</label>
              <br />
              <input
                type="file"
                multiple={false}
                {...register("image",{ required: true })}
                onChange={handleImageChange}
              />
              {image && <img src={image} width="100" height="100" />}
              {errors.image && errors.image.type == "required" && <p style={{color:"red"}}>Vui lòng chọn ảnh </p>}
            </div>
          </div>
          <div className="col-sm-6">
            <div className="">
              <label className="col-sm-2 col-form-label">Category</label>
              <br />
              <select
                className="form-select"
                aria-label="Default select example"
                {...register("category", { required: true })}
              >
                <option selected></option>
                <option value="Pizza">Pizza</option>
                <option value="Bugger">Bugger</option>
                <option value="Meats">Meats</option>
              </select>
              {errors.category && errors.category.type == "required" && <p style={{color:"red"}}>Vui lòng chọn danh mục sản phẩm </p>}
            </div>

            <div className="">
              <label className="col-sm-2 col-form-label">Description</label>
              <br />
              <textarea
                className="form-control"
                id="inputProductName"
                {...register("description", { required: true })}
                cols={10}
                rows={4}
              />
              {errors.description && errors.description.type == "required" && <p style={{color:"red"}}>Vui lòng nhập mô tả</p>}
            </div>
          </div>
        </div>
        <button className="btn btn-success btnAdd">Chỉnh sửa</button>
      </form>
    </div>
  );
};

export default EditProduct;
