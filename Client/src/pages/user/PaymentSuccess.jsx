import React from 'react'
import { Link } from 'react-router-dom'

export const PaymentSuccess = () => {
  return (
    <>
    <div className='flex items-center justify-center vh-full'>
    <div className="payment-success">
      <div className="payment-success__content">
        <h1 className='text-2xl font-bold text-green-500'>Payment Successful!</h1>
        <p className='font-semibold'>Thank you for your purchase.</p>
        <p className='font-semibold'>Your order has been successfully processed.</p>
        </div>
    </div>
</div>
        
        <div className=" flex items-center justify-center p-5 gap-5">
          <p className='font-semibold'>If you need to review or track your order</p>
          <Link to={"/order"} className="btn btn-primary">
            View Order Details
          </Link>
          <br />
          <Link to="/" className="btn btn-secondary">
            Go to Home
          </Link>
        </div>
      
</>
  );
};

