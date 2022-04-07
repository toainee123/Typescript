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
    name: String,
}
const UpdateCategory = (props: UpdateCategoryProps) => {
    const {register, handleSubmit,reset, formState:{errors}} = useForm<Forminput>()
    const navigate = useNavigate();
    const {id} = useParams()

    useEffect(() => {
        const getCategory = async () => {
          const {data} = await getCate(id);
          // Data duoc lay theo id tu product
          reset(data)
          // Ham reset se them data vao form 
        }
        getCategory()
    },[])
      const onUpdate:SubmitHandler<Forminput> = (data:any) => {
        // data se duoc nhan tu form 
        props.updateCate(data);
        // Nhan du lieu sau khi chinh sua cua data
        navigate('/admin/product')
        // Chuyen trang 
    }
  return (
    <div>
      <form action="" onSubmit={handleSubmit(onUpdate)}>
        {/* handleSubmit se bao ve form khi submit -> dong thoi no se chay ham  */}
        <input type="text" {...register('name', { required: true})} />
        { errors.name && <span>Fields is required</span>}
        <button>Update</button>
      </form>
    </div>
  )
}

export default UpdateCategory