import React from "react";
import { CircleUser } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { Darkmode } from "../shared/Darkmode";

export const UserHeader = () => {
    return (
        <div className="flex justify-between items-center w-full px-20  h-24 shadow-2xl  ">
            <Link to={"/"}>
                <div className="text-3xl font-bold">Logo</div>
            </Link>
            <nav className="flex gap-16 items-center font-semibold">
                <Link to={"/"}>Home</Link>
                <Link to={"/products"}>Products</Link>
                <Link to={"/order"}>Orders</Link>
                <Link to={"/cart"}>Cart</Link>
            </nav>

            <div className="flex gap-14 items-center ">
                <Darkmode/>
                <Link to={'Cart'}>
                    <ShoppingBag />
                </Link>
                <Link to={"Profile"}> 
                    <CircleUser />
                </Link>
            </div>
        </div>
    );
};