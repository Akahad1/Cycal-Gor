import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvidor/AuthProvider';
import { Rating } from '@smastrom/react-rating'
import toast, { Toaster } from 'react-hot-toast';



import '@smastrom/react-rating/style.css'
import ShowReview from './ShowReview';

const AddReview = ({id,reviews,setReviws}) => {
    const {user}=useContext(AuthContext)
    const[ratings,setRating]=useState(0)
   const email=user?.email;

   
   
    

    const reviweHandler=(event)=>{
      event.preventDefault()
      const form=event.target
      const Comment=form.comment.value;
      console.log(ratings,Comment)
      const Reviews={
        ProductsId:id,
        userEmail:email,
        name:user?.displayName,
        photoURL:user?.photoURL,
        rating:ratings,
        Comment,
      }
      fetch('http://localhost:5000/reviews',{
            method:"POST",
            headers:{
                "content-type" : 'application/json'
            },
            body: JSON.stringify(Reviews)
            
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
            
            if(data.acknowledged){
              
              // setReviws(data)
               
              toast.success('Successfully Review add');
               <Toaster/>
               form.reset()
            }
        })

    }

    




    return (
        <div >
          {reviews.map(review=>
            <ShowReview review={review}
            
            
             key={review._id}></ShowReview>
          )}
          {user?.uid?<form  onSubmit={reviweHandler}>
          
          <div className='flex justify-center mt-10'>
  <div className="card w-full ">
  <div className="card-body">
  <div className="avatar">
  <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img alt='' src={user?.photoURL} />
    
    
  </div>
  <p className='ml-4 mt-2 text-xl'>{user?.displayName}</p>
</div>

<div>
<Rating className='inline mt-3' style={{ maxWidth: 150 }} value={ratings} onChange={setRating} />

</div>

<textarea name='comment' className='border w-ful' placeholder='Share details of your own experinence at this product'  rows="4" cols="50"/>

    
    <div className='flex justify-end'>
    
   
    <button type='submit'  className='btn mt-3 text-white bg-blue-700 '>Post</button>
  </div>

  </div>
  
  </div>
</div>
</form>:<p className='text-2xl text-center text-blue-700 mb-12 mt-7 italic'>Please sign up and review the product</p>}
         
            
        </div>
    );
};

export default AddReview;