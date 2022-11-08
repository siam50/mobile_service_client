import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Services = () => {
    const services = useLoaderData();
    return (
        <div>
            <h3 className='text-3xl my-5'>Services{services.length}</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6'>
                {
                    services.map(service => <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={service.image} alt="Shoes" /></figure>
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
        </div>
    );
};

export default Services;