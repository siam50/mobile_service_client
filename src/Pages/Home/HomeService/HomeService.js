import React, { useEffect, useState } from 'react';

const HomeService = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <h3 className='text-3xl my-5'>Services{services.length}</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6'>
                {
                    services.map(service => <div key={service.id} className="card w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={service.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{service.title}</h2>
                            <p>{service.description.split(0, 100)}... Read more</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default HomeService;