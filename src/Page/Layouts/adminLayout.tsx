import React from 'react'
import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import SidebarAdmin from '../../components/Admin/sidebarAdmin'
import {isAuthenticate} from '../../utils/localStorage'

type Props = {}

const adminLayout = (props: Props) => {
    const navigate = useNavigate()
    return (
      <div>
        <header>
          <SidebarAdmin/>
          {/* <HeaderAdmin/> */}
        </header>
        <main>
          <Outlet/>
        </main>
      </div>
    )
}


export default adminLayout
