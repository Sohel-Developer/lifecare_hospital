import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../sharead/Footer/Footer';
import Navbar from '../sharead/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;