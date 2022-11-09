import React, { useEffect, useState } from 'react';

const ShowReview = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://mobile-service-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [reviews])
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            {
                reviews.map(review => <div key={review._id} className="overflow-x-auto w-full mt-2 border">
                    <table className="table w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Review</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <!-- row 1 --> */}
                            <tr>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={review.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{review.customer}</div>
                                            <div className="text-sm opacity-50">service: {review.serviceName}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <h3>{review.message}</h3>
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>)
            }
        </div>
    );
};

export default ShowReview;