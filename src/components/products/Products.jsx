import React from 'react'
import Product from '../product'
import './Products.css'
import { Container } from 'react-bootstrap';
function Products() {
  const products = [
    { id: 1, title: "product one", desc: "this is product one",src:'https://www.helikon-tex.com/media/catalog/product/cache/6/image/500x/17f82f742ffe127f42dca9de82fb58b1/k/u/ku-gmn-dc-1101a.jpg' },
    { id: 2, title: "product two", desc: "this is product two" ,src:'https://4.imimg.com/data4/RU/VC/MY-11853389/men-s-jackets.jpg'},
    { id: 3, title: "product three", desc: "this is product three",src:'https://www.boerboelwear.co.za/wp-content/uploads/2019/06/6R1A5939-Edit-scaled.jpg' },
  ];
  return (
    <>
    
     
      <Container>
      <h1>My Products</h1>
      <div className='row justify-content-center'>
        {
          products.map((product)=>{
            return <Product {...product} key={product.id}/>
          })
        }
      </div>
      </Container>
      
     
    </>
   
  )
}

export default Products