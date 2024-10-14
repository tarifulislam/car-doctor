import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingsRow from "./BookingsRow";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Bookings = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    const axiosSecure = useAxiosSecure();


    // const url = `http://localhost:5000/bookings?email=${user?.email}`;
    const url = `/bookings?email=${user?.email}`;


    useEffect(() => {
        // axios.get(url, {withCredentials : true} )
        // .then(res => {
        //     setBookings(res.data);
        // })

        axiosSecure.get(url)
          .then(res => setBookings(res.data))
    },[url, axiosSecure])
    console.log(bookings);


    const handleDelete = id => {
        const procced = confirm('Are you sure you want to delete');
        if(procced){
            fetch(`http://localhost:5000/bookings/${id}`,{
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount > 0){
                    alert('Booking deleted successfully');
                    const remaining = bookings.filter(booking => booking._id !== id);
                    setBookings(remaining);
                }
            })
        }
    }


    const handleConfirm = id => {
            fetch(`http://localhost:5000/bookings/${id}`,{
                method: 'PATCH',
                headers : {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({status: 'confirm'})
            })

            .then(res => res.json())
            .then(data => {
                console.log(data);

                if(data.modifiedCount > 0){
                    const remainingItem = bookings.filter(booking => booking._id !== id);

                    const updated = bookings.find(booking => booking._id === id);
                    updated.status = 'confirm';
                    const newBooking = [updated, ...remainingItem];
                    setBookings(newBooking);
                }
            })
        
    }

    return (
        <div className=" container mx-auto">
            <h2 className=" text-center py-5">{bookings?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label># </label>
                            </th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                          bookings.map((booking) => <BookingsRow key={booking._id} handleDelete={handleDelete} handleConfirm={handleConfirm} booking={booking}></BookingsRow>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Bookings;