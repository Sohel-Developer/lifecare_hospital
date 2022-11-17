import React from 'react';
import clint from '../../../assets/images/people1.png'

const ReviewCard = () => {
    return (
        <div className="bg-white pt-8 text-center rounded-lg shadow-lg">
            <img src={clint} alt="clint img " className=" w-20 mx-auto border-cyan-400 border-4 rounded-full" />
            <h2 className='text-2xl font-semibold mt-2 text-accent'>Jhon Deow</h2>
            <h3 className='text-xl'>USA</h3>
            <div className="p-6">
                <p className="text-accent mb-2">It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
            </div>
        </div>
    );
};

export default ReviewCard;