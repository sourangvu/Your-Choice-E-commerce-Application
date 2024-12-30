import React from 'react'
import { useParams } from "react-router-dom";
import { useFetch } from '../../hooks/useFetch';


export const ProductDetailsPage = () => {

  const { id } = useParams();
  const [productDetails,isLoading,error] = useFetch(`/product/product-details/${id}`);

  return (
    <>
     <div>
            <div>
                <h1>{productDetails?.title} </h1>
                <img src={productDetails?.image } alt="" className="w-full sm:w-32 md:w-48 lg:w-64 xl:w-80"/>
                <p>{productDetails?.description} </p>
              
            </div>
        </div>
    
    
    </>
  )
};
