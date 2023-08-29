import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllCartData from './AllCartData';
import { Toaster, toast } from 'react-hot-toast';

const MyCart = () => {
    
    const[cartProduct,setProduct]=useState([])
    
    useEffect(()=>{
        fetch('http://localhost:5000/addCart')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    const deletItem=(id)=>{
        const prossed =window.confirm("Are you sure, cancel this oder")
      if(prossed){
        fetch(`http://localhost:5000/addCart/${id}`,{
        method: "DELETE",
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        if(data.deletedCount){
          
          toast.success('YOU ITEM SUCCESSFULLY DELETE ');
          <Toaster/>
          alert('delete sucssfuly')
          const remainig =cartProduct.filter(odr=> odr._id !== id)
          setProduct(remainig)
        }
      })

      
    }
    }
    return (
        <div>
             <p className='text-2xl mt-10 text-center mb-10'>My Cart Products</p>
            {
                cartProduct.map(cartData=><AllCartData cartData={cartData}
                    key={cartData._id}
                    deletItem={deletItem}
                ></AllCartData>)
            }
            
        </div>
    );
};

export default MyCart;