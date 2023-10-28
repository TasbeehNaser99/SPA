import React from 'react'
import img3 from '../imgs/jacket2.jpg'
import img1 from '../imgs/men-s-jackets.jpg'
import imgs from '../imgs/mens-winter-jacket.jpg'
import './Product.css'

function Product(propp) {
  return (
   <>
   <div className='col-md-4'>
    <img src={propp.src} alt='product' className='img' />
    <h2>{propp.title}</h2>
    <p>{propp.desc}</p>
   </div>
   </>
  )
}

export default Product