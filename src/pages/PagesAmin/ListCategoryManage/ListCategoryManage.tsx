import React from 'react'

type Props = {}

const ListCategoryManage = (props: Props) => {
  return (
    <div> <main>
    <div className="container-fluid px-4">
    <div className="title_product">
            <div className=""><h1 className="mt-4">Manage Category</h1></div>
            <div className="addProduct"><button type="button" className="btn btn-success">Thêm mới</button></div>
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
</main></div>
  )
}

export default ListCategoryManage