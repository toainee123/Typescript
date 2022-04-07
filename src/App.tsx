import { useState, useEffect } from 'react'
import './App.css'
import { Navigate, NavLink, Route, Routes} from 'react-router-dom'
import Homepage from './Page/Homepage'
import Header from './components/header'
import AdminLayout from '../src/Page/Layouts/adminLayout'
import WebsiteLayout from './Page/Layouts/websiteLayout'
import ProductDetail from './Page/ProductDetail'
import ProductManager from './Page/ProductManager'
import {ProductType} from './Page/types/products'
import {list, onRemove} from '../src/api/product'
import ProductAdd from '../src/Page/ProductAdd';
import {addProduct} from '../src/api/product'
import UpdateProduct from '../src/Page/UpdateProduct'
import { update } from '../src/api/product'
import Slider from './components/Slider'
import Signup from './Page/Signup'
import Signin from './Page/Signin'
import Blog from './Page/Blog'
import SidebarAdmin from './components/Admin/sidebarAdmin'
import Category from './Page/Category'
import PrivateRoute from './Page/PrivateRoute'
import {ListCate, RemoveCate,CateAdd} from './api/Category'
import { TypeCategory } from './Page/types/Category'
import AddCategory from './Page/AddCategory'
import ProductPage from './Page/Productpage'
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
    console.log(id);
    const {data} = await onRemove(id)
    setProduct(products.filter(item => item._id !== data._id))
    console.log(data);
    
  }

  const add = async (product:any) => {
   const {data} =  await addProduct(product)
    setProduct([...products,data])
  }
  const updateItem = async (product:any) => {
    const {data} = await update(product)
    // {data} duoc destructuring tu product ham update duoc lay tu api/product
    setProduct(products.map(item => item._id === data._id ? data : item))
    // Ham setProduct se render lai neu Product duoc thay doi 
    // setProduct tao ra 1 mang moi va kiem tra neu data cu trung voi data moi thi lay data moi con neu khong thi giu nguyen 
  }

  // Category 
  const [categories, setCategories] = useState<TypeCategory[]>([])
  useEffect(() =>{
    const getCategory = async () => {
      const {data} = await ListCate()
      setCategories(data)
    }
    getCategory()
  },[])
  const removecate = async (id:string) => {
    await RemoveCate(id)
    setCategories(categories.filter(item => item._id !== id))
  }
  const addCategory = async (categoryData:any) => {
    const {data} =  await CateAdd(categoryData)
    setCategories([...categories, data]);
    
    // setCategory([...category,data])
   }
  return (
    <div className="App">
      <div className="container">
        <main>
          <Routes>
            <Route path="/" element={<WebsiteLayout/>}>
              {/* Component phai viet hoa  */}
              <Route index  element={<Homepage products = {products}/>}/>
              {/* <Route path='/products' element={<ProductPage/>}/> */}
              <Route path='blog' element={<Blog/>}/>
              <Route path="/products/:id" element={<ProductDetail/>} />
              <Route path='/products' element={<ProductPage/>}/>
            </Route>
            <Route path='admin' element={<PrivateRoute><SidebarAdmin/></PrivateRoute>}>
              <Route index element={<Navigate to={"dashboard"} />}/>
              <Route path='add' element={<ProductAdd add = {add} Categories = {categories}/>}/>
              <Route path='category' element={<Category category = {categories} RemoveCate= {removecate} />}/>
              <Route path='category/add' element={<AddCategory add = {addCategory}/>}/>
              <Route path="product" element={<ProductManager products = {products} onhandleRemove= {removeItem} />}/>
              <Route path='product/update/:id' element={<UpdateProduct onupdate = {updateItem}/>}/>
            </Route>  
            <Route path='signup' element={<Signup/>}/>
            <Route path='signin' element={<Signin/>}/>
          </Routes>
        </main>
        
      </div>
    </div>
  )
}
export default App
