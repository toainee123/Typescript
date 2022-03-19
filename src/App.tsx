import { useState, useEffect } from 'react'
import './App.css'
import ShowinfoProps from './components/Showinfo'
import { Navigate, NavLink, Route, Routes} from 'react-router-dom'
import Homepage from './Page/Homepage'
import ProductPage from './Page/Productpage'
import AboutPage from './Page/AboutPage'
import Header from './components/header'
import AdminLayout from '../src/Page/Layouts/adminLayout'
import WebsiteLayout from '../src/Page/Layouts/websiteLayout'
import Carousel from '../src/components/Slider'
import blog from '../src/Page/Blog'
import Blog from '../src/Page/Blog'
import ProductDetail from './Page/ProductDetail'

function App() {
  const [product, setProduct] = useState();
  useEffect(() =>{
    const getProudct = async() => {
      const response = await fetch('http://localhost:8000/products')
      const data = await response.json()
      setProduct(data)
    }
    getProudct()
  },[])

  return (
    <div className="App">
      <div className="container">
        <Header/>
        <Carousel/>
        <main>
          <Routes>
            <Route path="/" element={<WebsiteLayout />}>
                <Route path="/product/:id" element={<ProductDetail/>} />
                <Route index element={<Homepage />} />
                <Route path="product" element={<h1>Product Page</h1>}/>
                <Route path="blog" element= {<Blog />}/>
            </Route>
            <Route path='/admin' element={<AdminLayout/>}>
                <Route index element={<Navigate to= "dashboard"/>}/>
                <Route path="dashboard" element={<h1>Dashboard Page</h1>}/>
            </Route>
          </Routes>
        </main>
      </div>
    </div>
  )
}
export default App
