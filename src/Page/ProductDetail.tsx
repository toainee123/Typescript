import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';

type Props = {}
type ProductType = {
  id: number,
  name: string,
  price: string,
}

const ProductDetail = (props: Props) => {
  const id = useParams();
  const [Product, setProduct] = useState<ProductType>();
  useEffect( () => {
    const getProudct = async() => {
      const response = await fetch('http://localhost:8000/products'+id)
      const data = await response.json();
      setProduct(data);
    }
    getProudct();
  }, [])

  return (
    <div>{Product?.name}</div>
  )
}

export default ProductDetail