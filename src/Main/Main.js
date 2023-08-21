import React from 'react';
import Navber1 from '../component/Home.js/Navber/Navber1';
import Navber2 from '../component/Home.js/Navber/Navber2';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Navber1></Navber1>
            <Navber2></Navber2>
            <Outlet></Outlet>
            
            
        </div>
    );
};

export default Main;