import React from 'react';

const HospitalCard = ({ info }) => {
    console.log(info);

    const { name, description, icon, bgClass } = info;
    return (
        <div className={`pt-8 ${bgClass} text-center rounded-lg shadow-lg `}>
            <img src={icon} alt="icon info" className=" w-14 mx-auto rounded-t-lg" />
            <div className="p-6">
                <h2 className="font-bold mb-2 text-2xl  text-white">{name}</h2>
                <p className=" mb-2 text-white">{description}</p>

            </div>

        </div>
    );
};

export default HospitalCard;