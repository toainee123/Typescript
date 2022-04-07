import React from 'react'
import {useState, useEffect} from 'react'
type Props = {}

const [product, setProduct] = useState();
useEffect(() =>{
  const getProudct = async() => {
    const response = await fetch('http://localhost:3001/products')
    const data = await response.json()
    setProduct(data)
  }
  getProudct()
},[])

function ProductPage({}: Props) {
  return (
    <div>
      abc
    </div>
    
  )
}

export default ProductPage