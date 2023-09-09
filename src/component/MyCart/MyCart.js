import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllCartData from './AllCartData';
import { Toaster, toast } from 'react-hot-toast';
import { AuthContext } from '../../AuthProvidor/AuthProvider';
import useTitel from '../../Hook/useTitel';

const MyCart = () => {
    const {user,setCartSup}=useContext(AuthContext)
    const[cartProduct,setProduct]=useState([])
    useTitel('My Cart')
    
    useEffect(()=>{
        fetch(`https://cycal-server-akahad1.vercel.app/addCart?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>{setProduct(data)
          

        })
    },[user?.email])

    const deletItem=(id)=>{
        const prossed =window.confirm("Are you sure, cancel this oder")
      if(prossed){
        fetch(`https://cycal-server-akahad1.vercel.app/addCart/${id}`,{
        method: "DELETE",
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        if(data.deletedCount){
          
          toast.success('YOU ITEM SUCCESSFULLY DELETE ');
          <Toaster/>
          
          const remainig =cartProduct.filter(odr=> odr._id !== id)
          setProduct(remainig)
          setCartSup(remainig.length)
        }
      })

      
    }
    }
    setCartSup(cartProduct.length)

    return (
        <div className='min-h-screen'>
             <p className='text-2xl mt-10 text-center mb-10 font-style'>My Cart Products</p>
            {cartProduct.length>0?<>{
              cartProduct.map(cartData=><AllCartData cartData={cartData}
                  key={cartData._id}
                  deletItem={deletItem}
              ></AllCartData>)
          }</>:<p className='text-2xl text-center mt-10 font-style'>  Your No Product Available In This Cart</p>}
            
        </div>
    );
};

export default MyCart;