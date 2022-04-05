import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'
import {ProductType} from '../Page/types/products'
type ProductAddProps = {
    add: (data:ProductType) => void,
}

type FormInput = {
    name: string, 
    price: number
}



const ProductAdd = ({add}: ProductAddProps) => {
    const {register, handleSubmit} = useForm<FormInput>()
    const navigate = useNavigate();
    const submit = (data: any) =>{
        add(data)
        navigate('/admin/product')
    }
    return (
        <form action='' onSubmit={handleSubmit(submit)}>
            <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Product Name</label>
                <input type="text" id="email" {...register('name')} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
            </div>
            <div className="mb-6">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Price</label>
                <input type="text" id="password" {...register('price')} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Image</label>
                <input type="text"  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Product</button>
        </form>

    // <div>
    //     <form action="" onSubmit={handleSubmit(submit)}>
    //         <div className="form-group">
    //             <input type="text" className="form-control" {...register('name')} placeholder="Enter email"/>
    //         </div>
    //         <div className="form-group">
    //             <input type="text" className="form-control" {...register('price')} placeholder="Enter email"/>
    //         </div>
    //         <div className="form-group">
    //             <input type="text" className="form-control" {...register('img')} placeholder="Enter email"/>
    //         </div>
    //         <button className="btn btn-primary">Add</button>
    //     </form>
    //     {/* Lay input theo kieu du lieu ProductType */}
    // </div>
  )
}

export default ProductAdd