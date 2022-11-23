import axios from "axios";
import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { ICategory } from "../../../../interface/category";

type Props = {};

const EditCategory = (props: Props) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ICategory>();

  const { id } = useParams();
  
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`http://localhost:8080/category/`+ id);
        console.log(data.category);
        reset(data.category);
      } catch (error) {}
    })();
  }, []);

  const onSubmit: SubmitHandler<ICategory> = async (category) => {
    try {
      const { data } = await axios.put(
        `http://localhost:8080/category/${id}`,
        category
      );
      // console.log("data",data)
      navigate("/admin/category");
    } catch (error) {}
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-sm-6">
          <div className="">
            <label className="col-sm-2 col-form-label">Id Category</label>
            <br />
            <input type="text" className="form-control" disabled value={id}/>
          </div>
          <div className="">
            <label className="col-sm-2 col-form-label">Category Name</label>
            <br />
            <input
              type="text"
              className="form-control"
              {...register("categoryName",{required:true,minLength:5})}
            />
              {errors.categoryName && errors.categoryName.type == 'required' && <p>Vui long nhap danh mục</p> }
              {errors.categoryName && errors.categoryName.type == 'minLength' && <p>Ten danh muc phai lon hon 5 kí tu</p> }
          </div>
        </div>
      </div>
      <button className="btn btn-success btnAdd">Chỉnh sửa</button>
    </form>
  );
};

export default EditCategory;
