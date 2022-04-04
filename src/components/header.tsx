import React, { useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { isAuthenticate } from '../utils/localStorage'
import {useNavigate} from 'react-router-dom'
import BeforeSignIn from '../components/beforeSignin'
import AfterSignIn from '../components/AfterSignin'
type Props = {}

const Header = (props: Props) => {
  const navigate = useNavigate()
  const btnLogout = document.querySelector('#logout');
  btnLogout?.addEventListener('click', () => {
    localStorage.removeItem('user');
    alert('bạn đã đăng xuất tài khoản');
    navigate('/')
  })

  return (
    <div>
      {isAuthenticate() ? (  
      <div>
        <AfterSignIn/>
      </div>
      ) : (
        <BeforeSignIn/>

      )}
  </div>
   
  )
}

export default Header