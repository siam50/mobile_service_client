import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HomeService = () => {
    const [services, setServices] = useState([]);
    const nmbr = 3;

    useEffect(() => {
        fetch(`https://mobile-service-server.vercel.app/services?nmbr=${nmbr}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <h3 className='text-3xl my-5'>Services{services.length}</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6'>
                {
                    services.map(service => <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure> <img src={service.image} alt="Shoes" /> </figure>
                        <div className="card-body">
                            <h2 className="card-title">{service.title}</h2>
                            <p>{service.description.slice(0, 100)}... Read more</p>
                            <p className=' font-bold'>Price:${service.price}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Details</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <div className='grid justify-center my-5'>
                <Link to='/services'><button className="btn btn-primary">See All</button></Link>
            </div>

        </div>
    );
};

export default HomeService;