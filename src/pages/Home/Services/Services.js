import React, { useEffect, useState } from 'react';

import Card from './Card';

const Services = () => {

    const [infoData, setInfoData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setInfoData(data)
                console.log(data);
            })
    }, [])
    return (
        <div className='my-32'>
            <div className='text-center'>
                <h4 className=' font-bold text-xl mb-5 text-secondary'>OUR SERVICES</h4>
                <h2 className='text-4xl mb-10 text-accent'>Services We Provide</h2>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    infoData.map((card) => <Card
                        card={card}
                        key={card._id}
                    ></Card>)
                }
            </div>
        </div>
    );
};

export default Services;