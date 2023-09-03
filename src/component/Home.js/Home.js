import React, { useContext, useEffect, useState } from 'react'
import Banner1 from './Banner1/Banner1';

import Product from './AllProduct/Product';
import { Link } from 'react-router-dom';
import useTitel from '../../Hook/useTitel';
import { AuthContext } from '../../AuthProvidor/AuthProvider';

const Home = () => {
    const {search}=useContext(AuthContext)
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/product?search=${search}`)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[search])
    // console.log(products)
    useTitel("Home")
    return (
        <div>
            <Banner1></Banner1>
            <div className='mt-32 mb-16'>
                <span className='text-3xl flex justify-center font-style  text-primary'>Our Products</span>
                <span className='flex text-primary font-style mt-3 justify-center'>Our website has products from various companies.</span>
            </div >
           
           <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:ml-16 md:ml-2  '>
                {products.map(product=><Product
                products={product}
                key={product._id}
                ></Product>)}
            </div>
           
           <div className='text-center mt-3 mb-10'>
           <Link to='/allproduct'> <button className='btn mt-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  hover:to-yellow-500'>Visit All Bike</button></Link>
           </div>
            
        </div>
    );
};

export default Home;