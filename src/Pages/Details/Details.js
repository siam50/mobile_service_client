import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Details = () => {
    const service = useLoaderData();
    const { _id, title, image, description, price } = service;
    console.log(service)
    return (
        <div className='grid justify-center'>
            <h3 className='text-4xl font-semibold text-center '>Service of: {title}</h3>
            <div className="card w-96 glass my-5">
                <figure><img src={image} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <p className='font-bold'>Price:${price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Learn now!</button>
                    </div>
                </div>
            </div>
            <div className='grid justify-center'>
                <Link to={`/review/${_id}`}><button className='btn btn-primary'>Add Review</button></Link>
            </div>
        </div>
    );
};

export default Details;