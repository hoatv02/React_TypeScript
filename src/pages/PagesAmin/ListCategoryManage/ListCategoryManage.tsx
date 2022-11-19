import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ICategory } from "../../../interface/category";

type Props = {};

const ListCategoryManage = (props: Props) => {
  const [category, setCategory] = useState<ICategory[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/category`);
        // console.log(data.data);
        setCategory(data.data);
      } catch (error) {}
    })();

    // return ()=>{
    //   category
    // }
  }, []);
  const removeItem = async (id?: number) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:3000/category/${id}`
      );
      // console.log("data", data);
      setCategory(category.filter((item) => item._id !== data._id));
    } catch (error) {}
  };
  return (
    <div>
      {" "}
      <main>
        <div className="container-fluid px-4">
          <div className="title_product">
            <div className="">
              <h1 className="mt-4">Manage Category</h1>
            </div>
            <div className="addProduct">
            <Link
              type="button"
              to="/admin/addCategory"
              className="btn btn-success"
            >
              Thêm mới
            </Link>
            </div>
          </div>
          <div className="card mb-4">
            <div className="card-header">
              <i className="fas fa-table me-1"></i>
              Data category
            </div>
            <div className="card-body">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Product Name</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {category.map((item, index) => {
                    // console.log(item)
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.categoryName}</td>
                        <td>
                            <Link to={`/admin/editCategory/${item._id}`} className="btn btn-primary">
                                Edit
                            </Link>
                            <button onClick={() => removeItem(item._id!)} className="btn btn-danger">
                          Delete
                        </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ListCategoryManage;
