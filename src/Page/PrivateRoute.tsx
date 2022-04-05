import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { isAuthenticate } from '../utils/localStorage'

type Props = {
    children: JSX.Element
}

const PrivateRoute = ({children}: Props) => {
    const {user} = isAuthenticate()

    if(user){
        if(user.role == 0){
            return  <Navigate to={'/'}/>
        }
        return children
    }
    return <Navigate to={'/'}/>
    
    
    
}

export default PrivateRoute