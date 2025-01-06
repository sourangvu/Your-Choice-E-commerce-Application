import React from "react";
import { CircleUser } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { Darkmode } from "../shared/Darkmode";

export const UserHeader = () => {
    return (
        <div className="flex justify-between items-center w-full px-20  h-24 shadow-2xl  ">
            <Link to={"/"}>
                <div className="text-3xl font-bold animate-multicolor">YourChoice</div>
            </Link>
            <nav className="flex gap-16 items-center font-semibold">
                <Link to={"/"}>Home</Link>
                <Link to={"/products"}>Products</Link>
                <Link to={"/cart"}>Cart</Link>
                <Link to={"/order"}>Orders</Link>
            </nav>

            <div className="flex gap-14 items-center ">
                <Darkmode/>
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
        
    );
};