import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { axiosInstance } from '../../config/axiosInstance';
import toast from 'react-hot-toast';



export const Signup = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const role = "user";  

  const user = {
    role: role === "user" ? "user" : "seller", 
    login_route: role === "user" ? "/user/login" : "/seller/login",
    profile_route: role === "user" ? "/user/profile" : "/seller/profile",
    signup_route: role === "user" ? "/user/signup" : "seller/signup",
  };

  console.log(user, "=====user");

  const onSubmit = async (data) => {
      try {
          console.log(data,'====data');

          const formData = new FormData();

          formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("password", data.password);
        formData.append("mobile", data.mobile);

        if (data.profilePic[0]) {
          formData.append("profilePic", data.profilePic[0]);
      }
          
          
          const response = await axiosInstance({
            method: "POST",
            url: user.signup_route,
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
        });
          console.log(response, "====response");
          
          toast.success(" Sign-up success");
          navigate('/');
      } catch (error) {
          toast.error(" Sign-up failed");
          console.log(error);
      }
  };
  return (
    <>
  
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
         <h1 className="text-3xl text-center font-bold animate-multicolor">YourChoice</h1>
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray">
            Sign in {role}
          </h2>
        </div>
        

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="" method="POST" className="space-y-6" encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>

            <div>
              <label htmlFor="name" className="block text-sm/6 font-medium text-gray">
              Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name" 
                  type="text" {...register("name")}
                  required
                  autoComplete="name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray">
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email" 
                  type="email" {...register("email")}
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password" {...register("password")}
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="mobile" className="block text-sm/6 font-medium text-gray">
                Mobile
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="mobile"
                  name="mobile"
                  type="number" {...register("mobile")}
                  autoComplete="mobile"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="profilepic" className="block text-sm/6 font-medium text-gray">
                Profile Picture
              </label>
              <div className="mt-2">
                <input
                  id="profilepic"
                  name="profilepic"
                  type="file" {...register("profilePic")}
                  accept="image/*"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button 
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Sign in <Link to="/products"></Link>
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Already have an account? <Link to="/login" className="font-bold text-indigo-600 hover:text-indigo-400">Login here</Link>
          </p>
        </div>
      </div>
    
   
    </>
  )
}
