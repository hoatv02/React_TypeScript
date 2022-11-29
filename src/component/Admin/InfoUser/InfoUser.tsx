import React from 'react'
type Props = {}

const InfoUser = (props: Props) => {
  return (
    <div className="container_info">
      <div className="container_info_heading">
        <h6>Information</h6>
      </div>
      <div className="info_line"></div>
      <div className="container_info_content">
        <p>UserName : </p>
        <p>Email : </p>
        <p>Phone : </p>
        <p>Address : </p>
      </div>
      <div className="info_line"></div>

      <div className="container_info_footer"></div>

    </div>
  )
}

export default InfoUser