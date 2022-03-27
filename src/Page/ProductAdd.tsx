import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'
import {ProductType} from '../Page/types/products'
type ProductAddProps = {
    add: (data:ProductType) => void,
}

const ProductAdd = ({add}: ProductAddProps) => {
    const {register, handleSubmit} = useForm<ProductType>()
    const navigate = useNavigate();
    const submit = (data: any) =>{
        add(data)
        navigate('/product')
    }
    return (
    <div>
        <form action="" onSubmit={handleSubmit(submit)}>
            <div className="form-group">
                <input type="text" className="form-control" {...register('name')} placeholder="Enter email"/>
            </div>
            <div className="form-group">
                <input type="text" className="form-control" {...register('price')} placeholder="Enter email"/>
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
        {/* Lay input theo kieu du lieu ProductType */}
    </div>
  )
}

export default ProductAdd