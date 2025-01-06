import React from 'react'
import { Link, useParams } from "react-router-dom";
import { useFetch } from '../../hooks/useFetch';
import toast from 'react-hot-toast';
import { axiosInstance } from '../../config/axiosInstance';


export const ProductDetailsPage = () => {

  const { id } = useParams();
  const [productDetails,isLoading,error] = useFetch(`/product/product-details/${id}`);
  const handleAddToCart = async()=>{
    try {
      const response = await axiosInstance({
        method:"POST",
        url:"/cart/add-to-cart",
        data:{ productId: id },
      })
      toast.success('Product added to cart');
      
    } catch (error) {
      console.log(error)
      console.log(error.response)
      toast.error( error?.response?.data?.message ||'Failed - Add To Cart')
      
    }
  }

  return (
    <>
     <div>
            <div className='flex flex-col items-center'>
                <h1>{productDetails?.title} </h1>
                <img src={productDetails?.image } alt="" className="w-full sm:w-32 md:w-48 lg:w-64 xl:w-80"/>
                <p>{productDetails?.description} </p>
                <div className='flex items-center justify-center p-5 gap-5'>
                <button className='btn btn-success' onClick={handleAddToCart}>Add To Cart</button>
                <Link to={"/checkout"}>
                <button className='btn btn-warning'>Buy Now</button>
                </Link>

                </div>
                
            </div>
        </div>
    
    
    </>
  )
};
