import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from './../../Providers/AuthProvider';

const Checkout = () => {
    const serviceData = useLoaderData();
    const { title, _id, price, img } = serviceData;

    const { user } = useContext(AuthContext)


    const handleCheckSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const firstName = form.firstName.value;
        const date = form.date.value;
        const amount = form.amount.value;
        const email = form.email.value;
        const description = form.description.value;
        const booking = {
            customerName: firstName,
            email,
            img,
            date,
            service: title,
            service_id: _id,
            price: price,
        }
        // console.log(booking);
        fetch("http://localhost:5000/bookings", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(booking),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert("Booking Successful!");
                }
            })

    }

    return (
        <div className=" container mx-auto py-9 my-6 bg-[#F3F3F3]">
            <div className=" text-center">

                <h2 className=" font-bold text-3xl py-3">CheckOut</h2>
                <h2>{title}</h2>
            </div>
            <div className="card bg-base-100 w-7/12 mx-auto shadow-2xl my-9 ">
                <form onSubmit={handleCheckSubmit} className="card-body">

                    <div className="flex w-full justify-between">
                        <div className="form-control w-[49.5%]">
                            <input type="text" name="firstName" placeholder="First Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-[49.5%]">
                            <input type="date" name="date" className="input input-bordered" required />
                        </div>
                    </div>

                    <div className="flex w-full justify-between">
                        <div className="form-control w-[49.5%]">
                            <input type="number" defaultValue={price} name="amount" placeholder="due amount" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-[49.5%]">
                            <input type="email" defaultValue={user?.email} name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                    </div>

                    <div className="flex w-full">
                        <div className="form-control w-full">
                            <textarea placeholder="Your Message" name="description" cols="30" rows="6" className=" border-blue-200 border-2 rounded-lg outline-0 p-2"></textarea>
                        </div>
                    </div>


                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="Order Confirm" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout;