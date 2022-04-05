import instance from './instance';
import { isAuthenticate } from '../utils/localStorage';
import { TypeCategory } from '../Page/types/Category';



export const ListCate = () => {
  const url = `/category`
  return instance.get(url)
}
export const RemoveCate = (id:string) =>{
  const url = `/category/${id}`;
  return instance.delete(url)
}
export const addCategory = (category:TypeCategory) => {
const { token,user} = isAuthenticate()
  const url = `/category${user._id}`
  return instance.post(url,category,{
      headers:{
          "Authorization": `Bearer ${token}`
      }
  })
}
export const update = (category:TypeCategory) => {
  const url = `/category/${category._id}`;
  return instance.put(url,category)
}