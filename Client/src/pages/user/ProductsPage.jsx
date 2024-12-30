import React, { useEffect, useState } from 'react'
import { ProductCard } from '../../components/user/Cards'
import { useFetch } from '../../hooks/useFetch'

export const ProductsPage = () => {
  
  const [productList, isLoading, error] = useFetch("/product/get-all-products")
  
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
  {isLoading ? (
   <div className="flex w-52 flex-col gap-4">
   <div className="flex items-center gap-4">
     <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
     <div className="flex flex-col gap-4">
       <div className="skeleton h-4 w-20"></div>
       <div className="skeleton h-4 w-28"></div>
     </div>
   </div>
   <div className="skeleton h-32 w-full"></div>
 </div>
) : (
  <>
  
    {productList?.map((value) => (
      <ProductCard key={value._id} product={value}/>
    ))}
  
    </>
    )}
    </div>
    );
  };
    