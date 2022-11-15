import React from 'react';
import Chair from '../../../assets/images/chair.png'

const Banner = () => {
    return (
        <div className="hero rounded-lg" style={{ backgroundImage: `url("${Chair}")` }}>
            <div className="rounded-lg hero-overlay bg-opacity-60"></div>
            <div className="rounded-lg hero-content text-center py-64 text-neutral-content">
                <div className="max-w-lg">
                    <h1 className="mb-5 text-5xl font-bold text-primary">Your New Smile Starts Here</h1>
                    <p className="mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                    <button className="btn border-none font-bold bg-gradient text-accent ">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;