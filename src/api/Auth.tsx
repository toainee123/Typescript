import instance from "./instance";
type User = {
    name: string,
    password: string
}
// Đăng nhập
export const signup = (user:User) => {
    const url = `/signup`
    return instance.post(url, user)
}
// Đăng kí
export const signin = (user:User) => {
    const url = `/signin`
    return instance.post(url, user)
}