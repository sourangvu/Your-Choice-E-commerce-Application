import React, { useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { Link, useParams } from 'react-router-dom';


export const ProfilePage = () => {

    const [profileData, isLoading, error] = useFetch(`/user/profile`)
    
    return (
      <div className="flex items-center h-screen w-full justify-center">
        <div className="flex flex-col items-center">
          <h1>{profileData?.name}</h1>
          <img src={profileData?.profilePic} alt="Profile" className="w-full sm:w-32 md:w-48 lg:w-64 xl:w-80" />
          <p>{profileData?.email}</p>
          <div className="flex items-center justify-center p-5 gap-5">
            <Link to="/update-profile">
              <button className="btn btn-success">Update Profile</button>
            </Link>
            <Link to="/orders">
              <button className="btn btn-warning">Go To Orders</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

      

  




