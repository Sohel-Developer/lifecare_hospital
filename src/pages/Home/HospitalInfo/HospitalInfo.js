import React, { useEffect, useState } from 'react';
import HospitalCard from './HospitalCard';

const HospitalInfo = () => {
    const [infos, setInfos] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/hospitalinfo')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setInfos(data)
            })
    }, [])



    return (
        <div className='grid gap-8 mt-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                infos.map((info) => <HospitalCard
                    info={info}
                    key={info._id}
                ></HospitalCard>)
            }
        </div>
    );
};

export default HospitalInfo;