import { ResetTv } from "@mui/icons-material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchNavbar from "../../../component/Admin/SearchNavbar/SearchNavbar";
import { IProduct } from "../../../interface/product";
import { RingLoader, BeatLoader} from "react-spinners";

type Props = {};

const ListProductManage = (props: Props) => {
  const [product, setProduct] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // console.log(e.target[0].value)
    try {
      const valueInput = e.target[0].value;
      if (valueInput === "") {
        const { data } = await axios.get(`http://localhost:3001/product`);
        setProduct(data.data);

        return;
      }
      const { data } = await axios.get(
        `http://localhost:3001/search/` + valueInput
      );
      setProduct(data.data);
    } catch (error) {}
  };
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`http://localhost:3001/product`);
        // console.log(data.data);
        setProduct(data.data);
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } catch (error) {}
    })();
  }, []);
  // useEffect(() => {
  //   (async () => {
  //     try {

  //       const { data } = await axios.get(`http://localhost:3001/product`);
  //       // console.log(data.data);
  //       setProduct(data.data);
  //     } catch (error) {}
  //   })();
  // }, []);

  const removeItem = async (id?: number) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:3001/product/${id}`
      );
      // console.log("data", data);
      setProduct(product.filter((item) => item._id !== id));
    } catch (error) {}
  };
  return (
    <main>
      <div className="container-fluid px-4">
        <div className="title_product">
          <div className="">
            <h1 className="mt-4">Manage Products</h1>
          </div>
          <div className="addProduct">
            <form
              className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0"
              onSubmit={handleSubmit}
            >
              <div className="input-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search for..."
                  aria-label="Search for..."
                  aria-describedby="btnNavbarSearch"
                />
              </div>
              {/* <button className="btn btn-success btnAdd">Search</button> */}
            </form>
            <Link
              type="button"
              to="/admin/addProduct"
              className="btn btn-success btnAdd"
            >
              Thêm mới
            </Link>
          </div>
        </div>

        <div className="card mb-4">
          <div className="card-header">
            <i className="fas fa-table me-1"></i>
            Data products
          </div>
          <div className="card-body">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Quantity</th>

                  <th>Image</th>
                  <th>Description</th>
                  <th>Action</th>
                </tr>
              </thead>
              {loading ? (
                <BeatLoader color="#36d7b7" />
              ) : (
                <tbody>
                  {product.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.productName}</td>
                        <td>{item.price}</td>
                        <td>{item.category}</td>
                        <td>{item.quantity}</td>
                        <td>
                          <img
                            src={`http://localhost:3001/image/${item.image}`}
                            style={{ width: "80px", height: "80px" }}
                          />
                        </td>
                        <td>{item.description}</td>
                        <td>
                          <Link
                            type="button"
                            to={`/admin/editProduct/${item._id}`}
                            className="btn btn-primary"
                          >
                            Edit
                          </Link>

                          <button
                            onClick={() => removeItem(item._id!)}
                            className="btn btn-danger"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              )}
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ListProductManage;
