import axios from "axios";
import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { User } from "../../../../interface/user";

type Props = {};

const AddUser = (props: Props) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<User>();
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`http://localhost:3001/user/` + id);
        console.log(data)
        reset(data.data);
      } catch (error) {}
    })();
  }, []);
  const onSubmit: SubmitHandler<User> = async (user) => {
    try {
      const { data } = await axios.put(
        `http://localhost:3001/editUser/${id}`,
        user
      );
      navigate("/admin/user");
    } catch (error) {}
  };

  return (

    <div>
      <Link to="/admin/userDetail"><p style={{ padding: "10px  30px 0 30px" }}>Quay lai</p></Link>
      <form onSubmit={handleSubmit(onSubmit)} style={{ padding: "0 30px" }}>
      <div className="row">
        <div className="col-sm-6">
          <div className="">
            <label className="col-sm-2 col-form-label">UserName</label>
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
            <button className="btn btn-success btnedits">Chỉnh sửa</button>
    </form>
    </div>
  );
};

export default AddUser;
