import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const ListProductManage = (props: Props) => {
  return (

    <main>
      <div className="container-fluid px-4">
        <div className="title_product">
          <div className="">
            <h1 className="mt-4">Manage Products</h1>
          </div>
          <div className="addProduct">
            <Link type="button" to="/admin/addProduct" className="btn btn-success">
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
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Michael Bruce</td>
                  <td>Javascript Developer</td>
                  <td>Singapore</td>
                  <td>29</td>
                  <td>2011/06/27</td>
                  <td>$183,000</td>
                </tr>
                <tr>
                  <td>Donna Snider</td>
                  <td>Customer Support</td>
                  <td>New York</td>
                  <td>27</td>
                  <td>2011/01/25</td>
                  <td>$112,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ListProductManage;
