import { UserType } from '../Page/types/User';
import instance from './instance';
export const listUser = () => {
    const url = '/listUser'
    return instance.get(url)
}
export const Useradd = (user:UserType) => {
    const url = '/addUser';
    return instance.post(url,user)
}
export const deleteUser = (id:string) => {
    const url = `/removeUser/${id}`;
    return instance.delete(url)
}