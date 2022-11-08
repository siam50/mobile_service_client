import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const service = useLoaderData();
    return (
        <div>
            <h3>{service.title}</h3>
        </div>
    );
};

export default Details;