import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ShowReview from './ShowReview/ShowReview';

const Details = () => {
    const service = useLoaderData();
    const { _id, title, image, description, price } = service;
    const { user } = useContext(AuthContext);

    const handleReview = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = user?.email || 'unregister';
        const img = user?.photoURL;
        const message = form.message.value;

        const review = {
            service: _id,
            serviceName: title,
            customer: name,
            img,
            email,
            message
        }

        fetch('https://mobile-service-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('successfully review completed')
                    form.reset()
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='grid justify-items-center'>
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
            <div>
                <ShowReview></ShowReview>
            </div>
            <div className='w-full lg:w-2/3 my-5'>
                <h3 className='text-4xl font-semibold my-4 text-center'>Add Your Review</h3>
                <form onSubmit={handleReview}>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <input name='name' type="text" placeholder="name" className="input input-bordered w-full" />
                        <input name='email' type="text" placeholder="Email" defaultValue={user?.email} readOnly className="input input-bordered w-full" />
                    </div>
                    <textarea name='message' className="textarea textarea-bordered h-24 w-full my-3" placeholder="Bio"></textarea>
                    <div className='grid justify-center'>
                        <>
                            {
                                user?.email ?
                                    <input className='btn btn-primary' type="submit" value="Submit" />
                                    :
                                    <div className='flex justify-between'>
                                        <p> Please <Link to='/login'><strong className='text-info'>login</strong></Link> to add a review</p>
                                    </div>

                            }
                        </>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Details;