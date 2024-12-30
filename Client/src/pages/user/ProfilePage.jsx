import React from 'react'
import { useFetch } from '../../hooks/useFetch'

export const ProfilePage = () => {

  const [profileData,isLoading,error] = useFetch(`/user/profile`)
  
  return (
    <div>


    </div>
  )
}
