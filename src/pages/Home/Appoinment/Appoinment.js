import React from 'react';

const Appoinment = () => {
    return (
        <div className='appoinmentBaner rounded-lg '>
            <div className="hero my-20">
                <div className="hero-content pb-0 flex-col md:flex-row">
                    <div className='bg-none -mt-24'>
                        <img src="https://i.ibb.co/Zxc28Rm/doctor-small.png" alt='' className="rounded-lg shadow-2xl " />
                    </div>
                    <div className='md:w-1/2 md:ml-20 sm:mt-10 sm:pb-4 text-white '>
                        <h4 className="text-xl font-bold text-primary mb-10">Appoinment</h4>
                        <h1 className="text-5xl font-bold">Make an appoinment Today</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn btn-primary bg-gradient">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appoinment;