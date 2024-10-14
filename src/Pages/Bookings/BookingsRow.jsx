
const BookingsRow = ({booking, handleDelete, handleConfirm, }) => {
    const {_id, service,date, img, price, status} =booking;
console.log(status);

    return (
            <tr>
                <th>
                   <button onClick={()=>{handleDelete(_id)}} className=" btn btn-secondary btn-xs">X</button>
                </th>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                                <img src={booking?.img} alt=" CSS Component" />
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                   {booking?.service}   
                </td>
                <td>{date}</td>
                <td>{price}</td>
                <th>
                    {
                      status === 'confirm' ? <span className=" text-red-500">Confirm</span> : 
                      <button onClick={()=>handleConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>
                    }
                </th>
            </tr>
     
    );
};

export default BookingsRow;