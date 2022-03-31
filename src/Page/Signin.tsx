import React from 'react'
import {useState, useEffect} from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom'
import {signin} from '../api/Auth'

type SigninProps = {
    name: String,
    email: String,
    password: String,
}

const Signin = () => {
    const { register, handleSubmit} = useForm<SigninProps>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<SigninProps> = async (dataforn:any) => {
        const { data: user } = await signin(dataforn);
        localStorage.setItem('user', JSON.stringify(user))
        
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text"{...register('email', {required: true})} />
        <input type="text"{...register('password', {required: true})} />
        <button>Đăng nhập</button>
    </form>
  )
}

export default Signin