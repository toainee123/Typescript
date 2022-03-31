import React from 'react'
import Navbar from '../../components/Navbar';
import {NavLink, Outlet} from 'react-router-dom';
import Header from '../../components/header';
import Slider from '../../components/Slider'
import Footer from '../../components/Footer'

type Props = {}

const WebsiteLayout = (props: Props) => {
  return (
    <div>
      <Header/>
      <Slider/>
      <main>
          <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default WebsiteLayout