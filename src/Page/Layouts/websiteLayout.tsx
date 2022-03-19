import React from 'react'
import Navbar from '../../components/Navbar'
import {Outlet} from 'react-router-dom';

type Props = {}

const websiteLayout = (props: Props) => {
  return (
    <div>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default websiteLayout