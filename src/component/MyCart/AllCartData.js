import React from 'react';
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Toaster, toast } from 'react-hot-toast';

const AllCartData = ({cartData,deletItem}) => {
    const {_id,productId,name,img,category,price,ratings}=cartData
    const id=`/buy/${productId}`
    console.log(_id)
    const notify = () => toast('Here is your toast.');
    
    return (
        <div className='mt-10 mb-10'>
           
            <div className="card lg:card-side md:card-side mr-5 ml-5 ">
  <figure><img className='h-72' src={img}alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{category}</p>
    <Rating className='inline' style={{ maxWidth: 140 }} value={ratings} readOnly />
    <p><span className='text-xl'>৳</span>{price}</p>
    <div className="card-actions justify-end mt-5">
    <button onClick={()=>deletItem(_id)} className="btn btn-primary mr-10">Delete Cart</button>
      <Link to={id}><button className="btn btn-primary">Buy Now</button></Link>
      <button onClick={notify}></button>
      <Toaster />

    </div>
  </div>
</div>
            
        </div>
    );
};

export default AllCartData;