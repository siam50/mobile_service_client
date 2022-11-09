import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Review = () => {
    const { title, _id } = useLoaderData();
    const { user } = useContext(AuthContext);
    console.log(user)

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
        <div>
            <h3>{title}</h3>
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
    );
};

export default Review;