import React from 'react'
import {useState, useEffect} from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom'
import {ProductType} from '../Page/types/products'
import {get, list} from '../api/product'

type UpdateProductProps = {
  onupdate: (props: ProductType) => void
}

type formInput = {
  name: string,
  price: number
}



const UpdateProduct = (props:UpdateProductProps) => {
  const {register, handleSubmit , reset, formState:{errors}} = useForm<formInput>()
  const navigate = useNavigate()
  const {id} =  useParams();
  useEffect(() =>{
    const getProduct = async () => {
      const {data} = await get(id)
      reset(data)
      console.log(data);
    }
    getProduct()
  },[])

  const onUpdate:SubmitHandler<formInput> = data => {
    props.onupdate(data)
    navigate('/product')
  }
  return (
      <div>
        <form action="" onSubmit={handleSubmit(onUpdate)}>
          {/* handleSubmit se bao ve form khi submit -> dong thoi no se chay ham  */}
          <input type="text" {...register('name', { required: true})} />
          { errors.name && <span>Fields is required</span>}
          <input type="number" {...register('price')} />
          <button>Update</button>
        </form>
      </div>
    )
  }



// type UpdateProductProps = {
//     onupdate: (product: ProductType) => void
//     // ham onupdate nhan kieu du lieu la ProductType
// }
// type Forminput ={
//     name: String,
//     price: Number,
// }
// // Kieu du lieu cua form




// const UpdateProduct = (props: UpdateProductProps) => {
  
//     const {register, handleSubmit,reset, formState:{errors}} = useForm<Forminput>()
//     // useForm la 1 hook viet danh cho form 
//     // Ham reset nhan data -> api get Product the hien thi du lieu vao trong form 
//     const navigate = useNavigate();
//     const {id} = useParams()
//     // lay duoc it product tren thanh url bang ham useParam()
//     useEffect(() => {
//       const getProudct = async () => {
//         const {data} = await get(id);
//         // Data duoc lay theo id tu product
//         reset(data)
//         // Ham reset se them data vao form 
//       }
//       getProudct()
//     },[])

//     const onUpdate:SubmitHandler<Forminput> = (data) => {
//       // data se duoc nhan tu form 
//       props.onupdate(data);
//       // Nhan du lieu sau khi chinh sua cua data
//       navigate('/product')
//       // Chuyen trang 
//     }
//   return (
//     <div>
//       <form action="" onSubmit={handleSubmit(onUpdate)}>
//         {/* handleSubmit se bao ve form khi submit -> dong thoi no se chay ham  */}
//         <input type="text" {...register('name', { required: true})} />
//         { errors.name && <span>Fields is required</span>}
//         <input type="number" {...register('price')} />
//         <button>Update</button>
//       </form>
//     </div>
//   )
// }

export default UpdateProduct