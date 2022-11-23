import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductsSuggestion from '../../../component/Client/ProductsSuggestion/ProductsSuggestion'
import { IProduct } from '../../../interface/product'

type Props = {}

const ProductDetail = (props: Props) => {
    const [product,setProduct] =useState<IProduct[]>([])
    useEffect(() => {
        (
            async  ()=>{
                try {
                    const {data} = await axios.get(`http://localhost:8080/product`)
                    setProduct(data.data)
                } catch (error) {
                    
                }
            }
        )()
    },)

  return (
 <div>
       <section className="about_section layout_padding">
    <div className="container  ">
     {
        product.map((item,index)=>{
            return (
                <div className="row" key={index} style={{fontSize:"12px"}}>
                <div className="col-md-6 ">
                  <div className="img-box">
                    <img src="../../../style/images/about-img.png" style={{width:"40%"}} alt=""/>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="detail-box">
                    <div className="heading_container">
                      <h2>
                        {item.productName}
                      </h2>
                    </div>
                    <p>Giá : {item.price}</p>
                    <p>
                     Mô tả :{item.description}
                    </p>
                    <a href="">
                     Mua hàng
                    </a>
                  </div>
                </div>
             
              </div>
            )
        })
     }
    </div>
  </section>
  <ProductsSuggestion/>

 </div>
  )
}

export default ProductDetail