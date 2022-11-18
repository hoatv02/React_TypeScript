import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ICategory } from '../../../../interface/category'

type Props = {}

const AddCategory = (props: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<ICategory>()

    const onSubmit : SubmitHandler<ICategory> = () => {

    }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-sm-6">
            <div className="">
              <label className="col-sm-2 col-form-label">ProductName</label>
              <br />
              <input
                type="text"
                className="form-control"
              />
            </div>
            <div className="">
              <label className="col-sm-2 col-form-label">ProductName</label>
              <br />
              <input
                type="text"
                className="form-control"
              />
            </div>
           
          </div>
         
        </div>
        <button className="btn btn-success btnAdd">Thêm mới</button>
      </form>
  )
}

export default AddCategory