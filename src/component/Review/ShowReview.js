import React, { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'


const ShowReview = ({review,}) => {
    
    

    const {photoURL,rating,name,Comment}=review
    
    
    return (
        <div className='flex justify-center'>
            
            <div className="card w-full ">
  <div className="card-body">
    <div className=' flex'>
    <div className="avatar">
  <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img alt='' src={photoURL} />
    
  </div>
  <p className='ml-4 mt-[-0rem] text-xl'>{name}</p> 
  
  
</div>
<Rating  className='ml-5 mt-[-2rem]' style={{ maxWidth: 110 }} value={rating} readOnly />

    </div>
  

    <p className='ml-16 mt-[-2rem]'>{Comment}</p>
  </div>
</div>
            
        </div>
    );
};

export default ShowReview;