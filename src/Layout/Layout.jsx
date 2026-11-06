import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const Layout = () => {
  return (
    
    <main className='flex flex-col min-h-screen h-auto'>
        <Header/>
    <Outlet/>
    </main>
  )
}

export default Layout