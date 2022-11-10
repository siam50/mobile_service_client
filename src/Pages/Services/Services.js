import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import useTitle from '../../hooks/useTitle';

const Services = () => {
    const services = useLoaderData();
    const { loading } = useContext(AuthContext);
    useTitle('Services')

    if (loading) {
        return <div className='grid justify-center'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-400"></div>
        </div>
    };

    return (
        <PhotoProvider>
            <div>
                <h3 className='text-3xl font-semibold text-center my-5'>My Services</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6'>
                    {
                        services.map(service => <div key={service._id} className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><PhotoView src={service.image}><img className=' cursor-pointer' src={service.image} alt="Shoes" /></PhotoView></figure>
                            <div className="card-body">
                                <h2 className="card-title">{service.title}</h2>
                                <p>{service.description.slice(0, 100)}... <strong>Read more</strong></p>
                                <p className=' font-bold'>Price:${service.price}</p>
                                <div className="card-actions justify-end">
                                    <Link to={`/services/${service._id}`}><button className="btn btn-primary">Details</button></Link>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </PhotoProvider>
    );
};

export default Services;