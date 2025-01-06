import React, { useEffect, useState } from "react";
import { Header } from "../components/user/Header";
import { Footer } from "../components/user/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { UserHeader } from "../components/user/userHeader";
import { axiosInstance } from "../config/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { clearUser, saveUser } from "../redux/features/userSlice";


export const UserLayout = () => {
  const location = useLocation()
  const {isUserAuth} = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const checkUser = async () => {
    try {
      const response = await axiosInstance({
        method: "GET",
        url: "/user/check-user",
      });
      console.log(response, "=====checkUser");
      dispatch(saveUser())
    } catch (error) {
      console.log(error);
      dispatch(clearUser())
    }
  };

  useEffect(() => {
    checkUser();
  }, [location.pathname]);

  return (
    <div>
      {isUserAuth ? <UserHeader /> : <Header />}

      <div className="min-h-100">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};
