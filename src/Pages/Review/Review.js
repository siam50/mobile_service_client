import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Review = () => {
    const { title, _id } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handleReview = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const phone = form.phone.value;
        const email = user?.email || 'inregister';
        const message = form.message.value;

        const review = {
            service: _id,
            serviceName: title,
            customer: name,
            phone,
            email,
            message
        }
        console.log(review)

        fetch('http://localhost:5000/reviews', {
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
                    <input name='firstName' type="text" placeholder="First name" className="input input-bordered w-full" />
                    <input name='lastName' type="text" placeholder="Last name" className="input input-bordered w-full" />
                    <input name='phone' type="text" placeholder="Phone" className="input input-bordered w-full" />
                    <input name='email' type="text" placeholder="Email" defaultValue={user?.email} readOnly className="input input-bordered w-full" />
                </div>
                <textarea name='message' className="textarea textarea-bordered h-24 w-full my-3" placeholder="Bio"></textarea>
                <div className='grid justify-center'>
                    <input className='btn btn-primary' type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};

export default Review;