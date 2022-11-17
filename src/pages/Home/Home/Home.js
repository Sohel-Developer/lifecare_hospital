import React from 'react';
import Appoinment from '../Appoinment/Appoinment';
import Banner from '../Banner/Banner';
import Exceptional from '../Exceptional/Exceptional';
import HospitalInfo from '../HospitalInfo/HospitalInfo';
import Review from '../Review/Review';

import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner />
            <HospitalInfo />
            <Services />
            <Exceptional />
            <Appoinment />
            <Review />
        </div>
    );
};

export default Home;