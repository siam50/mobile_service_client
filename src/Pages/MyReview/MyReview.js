import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const MyReview = () => {
    const { user } = useContext(AuthContext);
    const [ownReviews, setOwnReviews] = useState([]);
    useTitle('MyReview');

    useEffect(() => {
        fetch(`https://mobile-service-server.vercel.app/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOwnReviews(data))
    }, [user?.email, ownReviews]);

    const handleDelete = (id) => {
        const agreed = window.confirm('Are you sure?')
        if (agreed) {
            fetch(`https://mobile-service-server.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.acknowledged) {
                        alert('Delete Successfully')
                    }
                })
        }

    }

    if (ownReviews.length <= 0) {
        return <h3 className='text-4xl font-semibold text-center my-5'>No reviews were added</h3>
    }
    return (
        <div>
            <h3 className='text-4xl font-semibold text-center my-5'>My All Reviews</h3>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 my-5'>
                {
                    ownReviews.map(review => <div key={review._id} className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 bg-slate-800 text-white">
                        <div className="flex justify-between p-4">
                            <div className="flex space-x-4">
                                <div>
                                    <img src={review.img} alt="" className="object-cover w-12 h-12 rounded-full" />
                                </div>
                                <div>
                                    <h4 className="font-bold">{review.customer}</h4>
                                    <span className="text-xs">{review.serviceName}</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 space-y-2 text-sm">
                            <p>{review.message}</p>
                            <div className=' flex justify-between'>
                                <button className='btn btn-warning btn-xs'>edit review</button>
                                <button onClick={() => handleDelete(review._id)} className='btn btn-error btn-xs'>delete review</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyReview;