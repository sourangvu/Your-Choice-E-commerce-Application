import React from 'react'
import { Link } from "react-router-dom"
import { Darkmode } from '../shared/Darkmode'


export const Header = () => {
  return (
    <>
    <div className="navbar bg-base">
  <div className="flex-1">
    <h1 className="btn btn-ghost text-xl">YouR ChoicE</h1>
  </div>
  <ul
        tabIndex={0}
        className="flex gap-10 items-center font-semibold p-5  ">
          <Link to= {'/'}>  <li>Home</li>        </Link>
          <Link to= {'/cart'}>  <li>Cart</li>        </Link>
          <Link to= {'/products'}>  <li>Products</li>    </Link>
          <Link to= {'/'}>  <li>Account</li>    </Link>

          <Darkmode/>
         
      </ul>

  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://png.pngtree.com/png-clipart/20210129/ourmid/pngtree-default-male-avatar-png-image_2811083.jpg" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

        <Link to={'/profile'}><li> Profile </li> </Link>
        <Link to={'/signup'}><li>Signup</li></Link>
        <Link to={'/login'}><li>Login</li></Link>
        <Link to={'/logout'}><li>Logout</li></Link>
      </ul>
    </div>
  </div>
</div>
    
    
    </>
  )
}
