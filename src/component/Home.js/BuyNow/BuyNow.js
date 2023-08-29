import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const BuyNow = () => {
    const {_id,name,img,category,price}=useLoaderData()

    const [quantity,setQuantity]=useState(1)
    const Increment=()=>{
        setQuantity(quantity+1)

    }
    const Decrement=()=>{
        setQuantity(quantity-1)

    }

    const Subtotal=quantity*parseInt(price);
    const DeliveryFree=parseInt((parseInt(price)/1000)*3);
    const Total=Subtotal+DeliveryFree;
    return (
        <div className='mt-10 mb-10'>
           <div  className=' ml-7 mr-7 mt-3 p-6 bg-slate-700'>
            <p className=' ml-5 text-xl text-white'>Order your preferred {name}</p>
             </div>
             <div className='lg:flex lg:justify-evenly' >
             <div className='lg:w-2/3 mt-5'>
             
             <div>
             <div className="overflow-x-auto mr ml-7">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        {/* <th></th> */}
        <th>Img</th>
        <th>Product</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Subtotal</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        {/* <td className='text-2xl'>
            X
        </td> */}
       
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-16 h-14">
                <img className='w-14 h-12' src={img} alt="Avatar Tailwind CSS Component"  />
              </div>
            </div>
            
          </div>
        </td>
        <td>
         {name}
          
        </td>
        <td><span className='text-xl'>৳</span>{price}</td>
        <th>
          <div>
          <button onClick={Decrement}  className='border  p-2'>-</button>
            <span className='border p-2 '>{quantity}</span>
            <button onClick={Increment}  className='border  p-2'>+</button>
          

          </div>
        </th>
        <th>
          <button className="btn btn-ghost btn-xs"><span className='text-xl'>৳</span>{Subtotal}</button>
        </th>
      </tr>
    </tbody>
  </table>
</div>
  </div>  
  </div>


             <div className='border pt-10 lg:w-3/12 lg:ml-0 md:ml-[13rem] md:mt-10  md:w-3/6 mt-10 ml-10 mr-10 pl-4 pr-4 lg:mt-5'>
                <div>
                <p className='mb-6'>Subtotal <span className='ml-24'>
                  <span className='text-xl'>৳</span>{Subtotal}</span></p>

                <p className='mb-6'>Shipping<span className='ml-24'> Shipping to Dhaka.</span> </p>
                <p className='mb-6'>Delivery Fee<span className='ml-[5rem]'><span className='text-xl'>৳</span>{DeliveryFree}</span></p>
                <p className='mb-6 text-xl'>Total<span className='text-xl ml-[8rem]'>
                  <span className='text-xl'>৳</span >{Total}</span></p>

                 <Link> <button className='btn btn-primary w-10/12 ml-4 mt-3 mb-5' >CHECKOUT</button></Link>
                </div>
               
             </div>

             </div>
            
            
        </div>
    );
};

export default BuyNow;