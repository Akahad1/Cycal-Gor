import React from 'react';
import Navber2 from '../component/Home.js/Navber/Navber2';
import { Outlet } from 'react-router-dom';
import Footer from '../component/Footer/Footer';

const BuyLayout = () => {
    return (
        <div>
             
            <Navber2></Navber2>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default BuyLayout;