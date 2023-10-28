import React from 'react'
import errorImg from '../../imgs/error404.png'
import'./PageNotFound.css'

function PageNotFound() {
  return (
    <div><img src={errorImg} alt='errorImg'/></div>
  )
}

export default PageNotFound