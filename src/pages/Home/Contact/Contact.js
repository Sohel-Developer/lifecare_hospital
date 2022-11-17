import React from 'react';

const Contact = () => {
    return (
        <div className='appoinmentBaner rounded-lg my-20'>
            <div className='text-center pt-10'>
                <h4 className=' font-bold text-xl mb-5 text-secondary'>OUR SERVICES</h4>
                <h2 className='text-4xl text-white'>Services We Provide</h2>
            </div>
            <div className=" sm:w-full md:w-1/2 lg:w-1/3 mx-auto">
                <form className="card-body">
                    <div className="form-control mb-2">
                        <input type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control mb-2">
                        <input type="text" placeholder="password" className="input input-bordered" />
                    </div>
                    <textarea className="textarea textarea-bordered" placeholder="Your Message"></textarea>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary bg-gradient text-white">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;