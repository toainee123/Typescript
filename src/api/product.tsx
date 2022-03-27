import instance from './instance';
import {ProductType} from '../Page/types/products'

export const list = () =>{
    const url = `/products`
    return instance.get(url)
}
export const get = (id:any) =>{
    const url = `/product/${id}`
    return instance.get(url)
}
export const onRemove = (id:string) =>{
    const url = `/product/${id}`;
    return instance.delete(url)
}
export const addProduct = (product:ProductType) => {
    const url = `/product`
    return instance.post(url,product)
}
export const update = (product:ProductType) => {
    const url = `/product/${product._id}`;
    return instance.put(url,product)
}