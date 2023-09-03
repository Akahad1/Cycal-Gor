import React, { useContext, useEffect, useState } from 'react';
import Bikes from './Bikes';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvidor/AuthProvider';

const AllProduct = () => {
    const {search,setSearch}=useContext(AuthContext)
    const [bikes,setbikes]=useState([])
    const [currentPage,setCurrentPages]=useState(0)
    const [itemParPage,SetitemPerPage]=useState(5)
    const [specificBike,SetSpecificBike]=useState([])
    const {totalproducts}=useLoaderData()
    useEffect(()=>{
        fetch(`http://localhost:5000/products?page=${currentPage}&limit=${itemParPage}&bike=${specificBike}&search=${search}`)
        .then(res=>res.json())
        .then(data=>setbikes(data))

    },[currentPage,itemParPage,specificBike,search])
    

   
    

    
    const totalPage=Math.ceil(totalproducts/itemParPage)
    console.log(totalPage)

    const pageNumber=[...Array(totalPage).keys()];
    const options=[3,5,10,20];
    function HandelSelcteChang(event){
        SetitemPerPage(parseInt(event.target.value))
        setCurrentPages(0)
    }
    
    console.log(specificBike)

    return (
        <div>
            <h1 className='text-center text-4xl mt-12 mb-7 font-style '>Here are all the products</h1>
            <div className=''>
            <div className=' text-center mb-20 '>
               
               <a href="/allproduct" className='text-xl font-style '  >All Bikes</a>

               <span className={specificBike==="Kids Bike"?'ml-3 font-style text-xl  p-2 bg-orange-600 rounded': 'ml-3 font-style text-xl'} onClick={()=>SetSpecificBike('Kids Bike')}>Kids Bike</span>

               <span className={specificBike==="Ladis Bikes"?'ml-3 font-style text-xl  p-2 bg-orange-600 rounded': 'ml-3 font-style text-xl'}onClick={()=>SetSpecificBike('Ladis Bikes')}> Ladis Bikes</span>

               <span className={specificBike==="Mountain Bike"?'ml-3 font-style text-xl  p-2 bg-orange-600 rounded': 'ml-3 font-style text-xl'}onClick={()=>SetSpecificBike('Mountain Bike')}>Mountain Bike</span>
           </div>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:ml-16 md:ml-2'>
            {bikes.map(bike=><Bikes
             bike={bike}
             key={bike._id}
             
            ></Bikes>)}

            </div>
           
        
            <div className=' text-center'>
            <h1 className='mb-9 text-primary font-style'>Current Pages {currentPage}</h1>

            
            {pageNumber.map(number=><button  className='btn mr-3 mb-3'
            onClick={()=>setCurrentPages(number)}
             key={number}>{number}</button>)}
            

             <select className='btn' value={itemParPage}
            onChange={HandelSelcteChang}
            >
            {options.map(option=><option  key={option} value={option}>
                {option}
            </option>)}
            
            </select>
            
            </div>
            
        </div>
    );
};

export default AllProduct;