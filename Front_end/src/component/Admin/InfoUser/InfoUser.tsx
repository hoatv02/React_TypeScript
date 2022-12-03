import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { User } from "../../../interface/user";
import { RingLoader, BeatLoader } from "react-spinners";

type Props = {};

const InfoUser = (props: Props) => {
  const [user, setUser] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async (item) => {
      try {
        const { data } = await axios.get(
          `http://localhost:3001/getOrder`,
          item
        );
        setUser(data.data);
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (error) {}
    })();
  }, []);
  const removeItem = async (id?: number) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:3001/deleteOrder/${id}`
      );
      setUser(user.filter((item) => item._id !== id));
    } catch (error) {}
  };
  return (
    <div className="container_info_user">
      <h4 className="h2infoUser">INFORMATION USER ORDER</h4>
      {loading ? (
        <BeatLoader color="#36d7b7" />
      ) : (
        <div className="container_info_user row  ">
          {user.map((item, index) => {
            return (
              <div
                className="container_info col-lg-2 col-md-3  col-sm-4 "
                key={index}
              >
                <div className="container_info_heading">
                  <h6>Information</h6>
                </div>
                <div className="info_line"></div>
                <div className="container_info_content">
                  <p>Name : {item.userName} </p>
                  <p>Email : {item.email} </p>
                  <p>Phone : {item.phone}</p>
                  <p>Address : {item.address}</p>
                </div>
                <div className="info_line"></div>

                <div className="container_info_footer row">
                  <div className="container_info_footer_edit col-lg-6">
                    <Link
                      type="button"
                      to={`/admin/editUser/${item._id}`}
                      className="btn btn-success"
                      style={{ fontSize: "8px" }}
                    >
                      edit
                    </Link>
                  </div>
                  <div className="container_info_footer_remove col-lg-6">
                    <button
                      className="btn btn-danger"
                      onClick={() => removeItem(item._id)}
                      style={{ fontSize: "8px" }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default InfoUser;
