import React from 'react'
import {useState, useEffect} from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom'
import {TypeCategory} from '../Page/types/Category'
import {getCate} from '../api/Category'
type UpdateCategoryProps = {
    updateCate: (product: TypeCategory) => void
}
type Forminput ={
    name: string,
}
const UpdateCategory = (props: UpdateCategoryProps) => {
    const {register, handleSubmit,reset, formState:{errors}} = useForm<Forminput>()
    const navigate = useNavigate();
    const {id} = useParams()

    useEffect(() => {
      const getCategory = async () => {
        const {data} = await getCate(id);
        // Data duoc lay theo id tu product
        console.log(data);
        
        reset(data)
        // Ham reset se them data vao form 
      }
      getCategory()
    },[])
      const onUpdate:SubmitHandler<Forminput> = (data:any) => {
        // data se duoc nhan tu form 
        props.updateCate(data);
        console.log(data);
        
        // Nhan du lieu sau khi chinh sua cua data
        navigate('/admin/category')
        // Chuyen trang 
    }
  return (
    <div>
      <form action="" onSubmit={handleSubmit(onUpdate)}>
      <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Category Name</label>
          <input type="text" id="email" {...register('name')} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name" required />
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update Category</button>
      </form>
    </div>
  )
}

export default UpdateCategory