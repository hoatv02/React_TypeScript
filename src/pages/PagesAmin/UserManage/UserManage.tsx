import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ICategory } from "../../../interface/category";
import { User } from "../../../interface/user";
import { RingLoader, BeatLoader} from "react-spinners";

type Props = {};

const UserManage = (props: Props) => {
  const [user, setUser] = useState<User[]>([]);
  const [loading,setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`http://localhost:3001/user`);
        setUser(data.data);
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } catch (error) {}
    })();
  }, []);
 
  return (
    <div>
      <main>
        <div className="container-fluid px-4">
          <div className="title_product">
            <div className="">
              <h1 className="mt-4">Manage user</h1>
            </div>
            <div className="addProduct">
              <Link
                type="button"
                to="/admin/addUser"
                className="btn btn-success"
              >
                Thêm mới
              </Link>
             
            </div>
          </div>
          <div className="card mb-4">
            <div className="card-header">
              <i className="fas fa-table me-1"></i>
              Data user
            </div>
            <div className="card-body">
              {/* <Link to={`/admin/userDetail`}>Xem chi tiet */}
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                  </tr>
                </thead>
               {loading ? <BeatLoader color="#36d7b7" />:  <tbody>
                  {user.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.userName}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.address}</td>
                      </tr>
                    );
                  })}
                </tbody>}
              </table>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserManage;
