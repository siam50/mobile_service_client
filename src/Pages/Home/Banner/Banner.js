import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen my-6 lg:my-8" style={{ backgroundImage: `url("https://t4.ftcdn.net/jpg/04/25/31/07/360_F_425310788_n0YRJeAC4MkMzcmVF7SDpN75Y0GZ3C6h.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Star Mobile Service</h1>
                    <p className="mb-5">Politeness goes far, yet costs nothing. Put customers first. Satisfied customers are our best ads. The customer is always right.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;