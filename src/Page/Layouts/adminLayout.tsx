import React from 'react'
import { Outlet } from 'react-router-dom'


type Props = {}

const adminLayout = (props: Props) => {
  return (
    <div>
        <div>h1</div>
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default adminLayout
