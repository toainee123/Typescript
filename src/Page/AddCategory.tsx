import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'
import { TypeCategory } from './types/Category';
type AddCategoryProps = {
    add: (data:TypeCategory) => void,
}

type FormInput = {
    name: string,
}
const AddCategory = ({add}: AddCategoryProps) => {
    const {register, handleSubmit} = useForm<FormInput>()
    const navigate = useNavigate();
    const onAddCate = (data: any) =>{
        add(data)
        navigate('/admin/category')
    }
  return (
        <form action='' onSubmit={handleSubmit(onAddCate)}>
            <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Product Name</label>
                <input type="text" id="email" {...register('name')} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Category</button>
        </form>
  )
}

export default AddCategory