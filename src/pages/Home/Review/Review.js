import React from 'react';
import ReviewCard from './ReviewCard';

const Review = () => {
    return (
        <div className='my-20'>
            <div className='text-center'>
                <h4 className=' font-bold text-xl mb-5 text-secondary'>Testimonial</h4>
                <h2 className='text-4xl mb-10 text-accent'>What Our Patients Says</h2>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
            </div>
        </div>
    );
};

export default Review; 