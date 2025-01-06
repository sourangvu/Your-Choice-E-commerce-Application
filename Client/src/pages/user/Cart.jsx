import React, { useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { CartCards } from '../../components/user/Cards';
import { axiosInstance } from '../../config/axiosInstance';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { loadStripe } from "@stripe/stripe-js";

export const Cart = () => {

  const [cartDetails, isLoading, error] = useFetch(`/cart/get-cart`);
  
  const handleQuantityChange = async (productId, newQuantity) => {
    try {
      if (newQuantity <= 0) {
        toast.error("Quantity cannot be less than 1");
        return;
      }

      // Send the updated quantity to the backend
      const response = await axiosInstance.put('/cart/update', {
        productId,
        quantity: newQuantity,
      });
      window.location.reload();
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  const makePayment = async () => {
    try {
        const stripe = await loadStripe(import.meta.env.VITE_STRIPE_Publishable_key);

        const session = await axiosInstance({
            url: "/payment/create-checkout-session",
            method: "POST",
            data: { products: cartDetails?.products },
        });

        console.log(session, "=======session");
        const result = stripe.redirectToCheckout({
             sessionId: session.data.sessionId,
        });
    } catch (error) {
        console.log(error);
    }
};



  const handleRemoveProduct= async(productId)=>{
    try {
      const response = await axiosInstance({
        method:"DELETE",
        url:"/cart/remove-from-cart",
        data:{productId}
      })
      toast.success("Product Removed From Cart")
      window.location.reload();
    } catch (error) {
      console.log
      
    }
  }
  

  return (
    <div>
    <div>
        {cartDetails?.products?.map((value) => (
            <CartCards item={value} key={value._id} handleRemove={handleRemoveProduct} handleQuantityChange={handleQuantityChange} makePayment={makePayment}/>
        ))}
    </div>
    {cartDetails?.products?.length ? (
        <div className="bg-base-300 flex flex-col w-6/12 mx-auto items-center justify-center gap-5">
            <h2>Price Summary</h2>

            <h2>Total Price: {cartDetails?.totalPrice}</h2>

           <Link to="/checkout"> 
           <button className="btn btn-success" onClick={makePayment}>Checkout</button>
            </Link>
        </div>
    ) : (
      <div className='flex items-center justify-center h-screen'>

        <h1> Cart Is Empty! </h1>
        <Link to="/products">
        <button className="btn btn-info">Add Products Now</button>
        </Link>

      </div>
        
    )}
</div>
);
};
    
  
