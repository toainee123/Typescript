export const isAuthenticate = () => {
    if(!localStorage.getItem('user')) return false;
    return JSON.parse(localStorage.getItem('user') as string)
}


// const dataUser = isAuthenticate
// if(dataUser){
//     if(dataUser.user.role === 0){
//         return /
//     }else{
//         return props.children
//     }
// }
// return /