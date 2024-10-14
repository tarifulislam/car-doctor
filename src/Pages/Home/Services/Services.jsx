import { useEffect, useState } from "react";
import Service from "./Service";
import useServices from "../../../hooks/useServices";

const Services = () => {
    const services = useServices();
    // const [services, setServices] = useState([]);
    // useEffect(() => {
    //     fetch('http://localhost:5000/services')
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [])
    return (
        <div className=" container mx-auto py-9">
            <div className=" py-6  p-[25%] text-center">
                <h4 className=" font-bold text-xl text-orange-500">Service</h4>
                <h2 className=" font-bold text-4xl">Our Service Area</h2>
                <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem architecto nemo numquam quae rerum sit itaque voluptates in, corrupti sint quas labore soluta provident commodi.</p>
            </div>
            <div className=" grid grid-cols-3 gap-6">
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;