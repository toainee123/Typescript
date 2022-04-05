import instance from './instance';
import {ProductType} from '../Page/types/products'
import { isAuthenticate } from '../utils/localStorage';
export const list = () =>{
    const url = `/products`
    return instance.get(url)
}
export const get = (id:any) =>{
    const url = `/product/${id}`
    return instance.get(url)
}
export const onRemove = (id:string) =>{
    const url = `/products/${id}`;
    return instance.delete(url)
}
export const addProduct = (product:ProductType) => {
const { token,user} = isAuthenticate()
    const url = `/products/${user._id}`
    return instance.post(url,product,{
        headers:{
            "Authorization": `Bearer ${token}`
        }
    })
    
}
export const update = (product:ProductType) => {
    const url = `/products/${product._id}`;
    return instance.put(url,product)
}