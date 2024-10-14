import { Link } from "react-router-dom";

const Service = ({ service }) => {
    const { _id, title, img, price, description } = service;
    return (
        <div className="card bg-base-100 w-full shadow-xl">
            <figure className="px-6 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body  ">
                <h2 className="card-title">{title}</h2>
                <p>Price : ${price}</p>
                <div className="flex justify-between items-center text-red-500">
                    <p>Price : ${price}</p>
                    <Link to={`/checkout/${_id}`}>
                        <button className="btn text-red-500">Book Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;