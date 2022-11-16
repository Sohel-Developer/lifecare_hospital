import React from 'react';

const Card = ({ card }) => {
    const { img, description, name } = card;
    return (
        <div className="bg-white pt-8 text-center rounded-lg shadow-lg">
            <img src={img} alt=" " className=" w-28 mx-auto rounded-t-lg" />
            <div className="p-6">
                <h2 className="font-bold mb-2 text-2xl text-accent">{name}</h2>
                <p className="text-accent mb-2">{description}</p>

            </div>

        </div>
    );
};

export default Card;