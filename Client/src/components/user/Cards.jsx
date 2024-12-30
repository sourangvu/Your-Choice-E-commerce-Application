import { Link } from "react-router-dom";

export const ProductCard = ({ product }) => {
    console.log("data=====", product);

    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
                <img src={product?.image} alt="course" />
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