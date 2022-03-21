import { useState, useEffect } from 'react'
import './App.css'
import { Navigate, NavLink, Route, Routes} from 'react-router-dom'
import Homepage from './Page/Homepage'
import Header from './components/header'
import AdminLayout from '../src/Page/Layouts/adminLayout'
import WebsiteLayout from '../src/Page/Layouts/websiteLayout'
import Carousel from '../src/components/Slider'
import Blog from '../src/Page/Blog'
import ProductDetail from './Page/ProductDetail'
import ProductManager from './Page/ProductManager'
import {ProductType} from './Page/types/products'
import {list, onRemove} from '../src/api/product'

function App() {
  const [products, setProduct] = useState<ProductType[]>([])
  useEffect(() =>{
    const getProduct = async () => {
      const {data} = await list()
      setProduct(data)
    }
    getProduct()
  },[])
  const removeItem = async (id:string) => {
    await onRemove(id)
    setProduct(products.filter(item => item._id !== id))
  }
  return (
    <div className="App">
      <div className="container">
        <Header/>
        <Carousel/>
        <main>
          <Routes>
            <Route path="/" element={<WebsiteLayout />}>
                <Route index element={<Homepage />}/>
                <Route path="product/:id" element={<ProductDetail/>} />
                <Route path="product" element={<ProductManager products = {products} onRemove= {removeItem} />}/>
            </Route>
            <Route path='/admin' element={<AdminLayout/>}>
                <Route index element={<Navigate to= "dashboard"/>}/>
                <Route path="dashboard" element={<h1>Dashboard Page</h1>}/>
                {/* <Route path="productManager" element={}/> */}
            </Route>
          </Routes>
        </main>
        
      </div>
    </div>
  )
}
export default App
