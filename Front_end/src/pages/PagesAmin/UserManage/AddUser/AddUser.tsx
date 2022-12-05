import axios from "axios";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { User } from "../../../../interface/user";

type Props = {};

const AddUser = (props: Props) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();
  const onSubmit: SubmitHandler<User> = async (user) => {
    try {
      const { data } = await axios.post(`http://localhost:3001/addUser`, user);
      navigate("/admin/user");
    } catch (error) {}
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ padding: "30px" }}>
      <div className="row">
        <div className="col-sm-6">
          <div className="">
            <label className="col-sm-2 col-form-label">User Name</label>
            <br />
            <input
              type="text"
              className="form-control"
              {...register("userName", { required: true })}
            />
            {errors.userName && errors.userName.type == "required" && (
              <p style={{ color: "red" }}>Vui lòng nhập tên .</p>
            )}
          </div>
          <div className="">
            <label className="col-sm-2 col-form-label">Email</label>
            <br />
            <input
              type="text"
              className="form-control"
              {...register("email", { required: true })}
            />
            {errors.email && errors.email.type == "required" && (
              <p style={{ color: "red" }}>Vui lòng nhập email .</p>
            )}
          </div>
          <div className="">
            <label className="col-sm-2 col-form-label">Phone</label>
            <br />
            <input
              type="text"
              className="form-control"
              {...register("phone", { required: true })}
            />
            {errors.phone && errors.phone.type == "required" && (
              <p style={{ color: "red" }}>Vui lòng nhập phone .</p>
            )}
          </div>
          <div className="">
            <label className="col-sm-2 col-form-label">Address</label>
            <br />
            <input
              type="text"
              className="form-control"
              {...register("address", { required: true })}
            />
            {errors.address && errors.address.type == "required" && (
              <p style={{ color: "red" }}>Vui lòng nhập địa chỉ .</p>
            )}
          </div>
        </div>
      </div>
      <button className="btn btn-success btnAdd">Thêm mới</button>
    </form>
  );
};

export default AddUser;
