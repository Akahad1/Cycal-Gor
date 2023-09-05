import React from 'react';

const OrderDetails = ({order}) => {
    const {email,uerName,number,City,District,StreetAddress,name,img,category,price}=order;
    
        
    return (
        <div className=' mt-10 '>
            <div className="card p-6 w-96   shadow-2xl">
            
 
  <div className="">
    <h2 className="text-2xl">User Information</h2>

    <div className='mb-5'>
    <p>User Name:{uerName}</p>
    <p>Email: {email}</p>
    <p>Number: {number}</p>
    <p>City: {City}</p>
    <p>District: {District}</p>
    <p>StreetAddress: {StreetAddress}</p>
    </div>
    
  </div>
  <p className='text-2xl mb-3'>Images</p>
  <div className="avatar">
  <div className="w-16  ring ring-primary ring-offset-base-100 ring-offset-2">
    <img  alt=''src={img} />
  </div>
</div>
<div className='mt-5'>
    <p>Bike Name: {name}</p>
    <p>Brand: {category}</p>
    <p>Price: {price}</p>
    
</div>
</div>
            
        </div>
    );
};

export default OrderDetails;