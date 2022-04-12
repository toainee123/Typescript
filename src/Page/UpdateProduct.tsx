import React from 'react'
import {useState, useEffect} from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom'
import {ProductType} from '../Page/types/products'
import {get, list} from '../api/product'
type UpdateProductsProps = {
    onupdate: (product: ProductType) => void
    // ham onupdate nhan kieu du lieu la ProductType
}
type Forminput ={
    name: string,
    price: number,
    img: string,
    title: string,
    desc: string,
}
// Kieu du lieu cua form
const UpdateProducts = (props: UpdateProductsProps) => {
  
    const {register, handleSubmit,reset, formState:{errors}} = useForm<Forminput>()
    // useForm la 1 hook viet danh cho form 
    // Ham reset nhan data -> api get Product the hien thi du lieu vao trong form 
    const navigate = useNavigate();
    const {id} = useParams()
    // lay duoc it product tren thanh url bang ham useParam()
    useEffect(() => {
      const getProudct = async () => {
        const {data} = await get(id);
        // Data duoc lay theo id tu product
        reset(data)
        // Ham reset se them data vao form 
      }
      getProudct()
    },[])

    const onUpdate:SubmitHandler<Forminput> = (data:any) => {
      // data se duoc nhan tu form 
      props.onupdate(data);
      // Nhan du lieu sau khi chinh sua cua data
      navigate('/admin/product')
      // Chuyen trang 
    }
  return (
    <div>
      <form action="" onSubmit={handleSubmit(onUpdate)}>
        {/* handleSubmit se bao ve form khi submit -> dong thoi no se chay ham  */}
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Product Name</label>
          <input type="text" id="email" {...register('name')} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name" required />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Product Name</label>
          <input type="text" id="email" {...register('title')} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="title" required />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Product Name</label>
          <input type="text" id="email" {...register('price')} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="price" required />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Product Name</label>
          <input type="text" id="email" {...register('img')} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="price" required />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Product Name</label>
          <input type="text" id="email" {...register('desc')} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="price" required />
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
          
      </form>
    </div>
  )
}

export default UpdateProducts