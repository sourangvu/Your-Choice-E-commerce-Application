import { useState } from "react";
import { Link } from "react-router-dom";
import { Cart } from "../../pages/user/Cart";

export const ProductCard = ({ product }) => {
    console.log("data=====", product);

    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
                <img src={product?.image} alt="product" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product?.title} </h2>
                <p>{product?.price} </p>
                <div className="card-actions justify-end">
                    <Link to={`/productDetails/${product?._id}`}>
                        <button className="btn btn-primary">More Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export const CartCards = ({ item, handleRemove,  handleQuantityChange, makePayment}) => {


       const [quantity, setQuantity] = useState(item?.quantity || 1);

       const increaseQuantity = () => {
       setQuantity((prevQuantity) => prevQuantity + 1);
       handleQuantityChange(item?.productId?._id, quantity + 1);
    };

       const decreaseQuantity = () => {
       if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      handleQuantityChange(item?.productId?._id, quantity - 1);
    }
  };
    
    

        return (
            <div className="flex w-full h-32 items-center justify-center gap-20 bg-base-300 mb-10 rounded-md ">

                <img src={item?.productId?.image} alt="cart-item" className="w-20 h-20" />
    
                <div>
                    <h2>{item?.productId?.title} </h2>
                    <h3>{item?.productId?.price} </h3>
                </div>

                <div className="flex items-center gap-2">

               <button className="btn btn-secondary"
               onClick={decreaseQuantity}> - 
               </button>
                <span>{quantity}</span>
               <button  className="btn btn-secondary"
                   onClick={increaseQuantity} > +
                </button>
               </div>
                
                
                <button className="btn btn-secondary" onClick={() => handleRemove(item?.productId?._id)}>
                    Remove
                </button>
                <button className="btn btn-warning" onClick={makePayment}>Buy now
                </button>
                
            </div>
        );
    };


