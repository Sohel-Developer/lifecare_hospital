import React from 'react';
import Banner from '../Banner/Banner';
import HospitalInfo from '../HospitalInfo/HospitalInfo';

import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner />
            <HospitalInfo />
            <Services />
        </div>
    );
};

export default Home;