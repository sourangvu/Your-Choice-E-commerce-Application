import React, { useState } from 'react'
import { Header } from '../components/user/Header'
import { Footer } from '../components/user/Footer'
import { Outlet } from 'react-router-dom'
import { UserHeader } from '../components/user/userHeader'

export const UserLayout = () => {

  const [ isUserAuth,setIsUserAuth] =useState(false)

  return (
  
    <div>
        {isUserAuth ? <UserHeader/>: <Header/> }
        
        <div className='min-h-100'>

        <Outlet/>
  
</div>

        <Footer/>
    </div>
  )
}
