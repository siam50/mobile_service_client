import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const MyReview = () => {
    const { user } = useContext(AuthContext);
    const [ownReviews, setOwnReviews] = useState([]);

    useEffect(() => {
        fetch(`https://mobile-service-server.vercel.app/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOwnReviews(data))
    }, [user?.email, ownReviews])
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
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyReview;