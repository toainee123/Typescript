import instance from './instance';
export const listUser = () => {
    const url = '/listUser'
    return instance.get(url)
}