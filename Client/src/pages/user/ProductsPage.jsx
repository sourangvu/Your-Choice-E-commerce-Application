import React, { useEffect, useState } from 'react'
import { ProductCard } from '../../components/user/Cards'
import { useFetch } from '../../hooks/useFetch'

export const ProductsPage = () => {
  
  const [productList, isLoading, error] = useFetch("/product/get-all-products")
  const [page, setPage] = useState(1);
  console.log(productList)

  useEffect(() => {
    if (productList?.data?.data) {
      productList((prevList) => [...prevList, ...data]); // Append new products
    } 
  })
  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  }

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
    
    )};
    <div className="flex flex-col items-center justify-center text-center mt-4 ">
            <button
              onClick={handleLoadMore}
              className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700"
            >
              Load More
            </button>
          </div>

    </div>
    
    );
  };
    