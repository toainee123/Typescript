import React from 'react'
import {useForm, SubmitHandler} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import {signup} from '../api/Auth'
type signinProps = {}

type formInput = {
    name: string,
    email: string,
    password: string,
}


const Signup = (props: signinProps) => {
    const {register, handleSubmit, formState:{errors}, } = useForm<formInput>()
    const navigate = useNavigate()
    const onSubmit: SubmitHandler<formInput> = data => {
        signup(data);
        // navigate('/admin/product')
    }

  return (
    <div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register('name', {required: true})} />
            <input type="text" {...register('email', {required: true})} />
            <input type="text" {...register('password', {required: true})} />
            <button>Dang ky</button>
        </form>
    </div>
  )
}

export default Signup