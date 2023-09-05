import React, { useContext } from 'react';
import { AiFillPhone,AiOutlineMail } from 'react-icons/ai';
import { BsHouseAdd } from 'react-icons/bs';
import { RxAvatar } from 'react-icons/rx';

import { AuthContext } from '../../AuthProvidor/AuthProvider';
import { Toaster, toast } from 'react-hot-toast';
import useTitel from '../../Hook/useTitel';

const OderModer = ({Subtotal,DeliveryFree,Total,name,img,category,price}) => {
    const {user}=useContext(AuthContext)
    useTitel("Confrim Order")

    const OderData=(event)=>{
        event.preventDefault()
     const form =event.target
    const uerName =form.name.value
    const email =form.email.value;
    const number=form.number.value;
    const District=form.District.value;
    const City=form.city.value;
    const StreetAddress=form.StreetAddress.value;
    console.log(uerName,email,number,District,City,StreetAddress)

    const OrderDetails={
      uerName,
        email,
        number,
        City,
        District,
        StreetAddress,
        name,
        img,
        category,
        price
    }
    fetch('http://localhost:5000/order',{
            method:"POST",
            headers:{
                "content-type" : 'application/json'
            },
            body: JSON.stringify(OrderDetails)
            
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
            
            if(data.acknowledged){
    
              alert('You oder is succsfull')
             toast.success('Successfully Review add');
               <Toaster/>
               form.reset()
            }
        })

    }
    return (
        <div>
            {/* The button to open modal */}


{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal">
    
  <div className="modal-box">
  <div className="modal-action">
      <label htmlFor="my_modal_6" className="btn">X</label>
    </div>
    
    <h3 className="font-bold text-lg">Confrim Your Order</h3>
    <div className='mt-7 border p-4'>
                <p className='mb-6'>Subtotal <span className='ml-24'>
                  <span className='text-xl'>৳</span>{Subtotal}</span></p>

                <p className='mb-6'>Shipping<span className='ml-24'> Shipping to Dhaka.</span> </p>
                <p className='mb-6'>Delivery Fee<span className='ml-[5rem]'><span className='text-xl'>৳</span>{DeliveryFree}</span></p>
                <p className='mb-6 text-xl'>Total<span className='text-xl ml-[8rem]'>
                  <span className='text-xl'>৳</span >{Total}</span></p>

                
                </div>
                <form  onSubmit={OderData} >
   
    <div  className="form-control mt-5">
       <label className="label">
         <span className="label-text "> <RxAvatar className='inline text-2xl mr-1 rounded'/>Your Name</span>
       </label>
       <input type="text" value={user?.displayName} name='name'  className="input input-bordered"   readOnly/>
     </div>
    <div className="form-control mt-5">
       <label className="label">
         <span className="label-text "> <AiOutlineMail className='inline text-2xl mr-1 rounded'/>Your Email</span>
       </label>
       <input type="email" name='email' value={user?.email} className="input input-bordered "  readOnly />
     </div>
    <div className="form-control mt-5">
       <label className="label">
         <span className="label-text "> <AiFillPhone className='inline text-2xl mr-1 rounded'/>Phone Number</span>
       </label>
       <input type="number" name='number' placeholder="Phone Number" className="input input-bordered "  required/>
     </div>
    <div className="form-control mt-5">
       <label className="label">
         <span className="label-text "> <BsHouseAdd className='inline text-2xl mr-1 rounded'/>Town / City </span>
       </label>
       <input type="text" name='city' placeholder=" Enter you Town / City address" className="input input-bordered "  required/>
     </div>
    <div className="form-control mt-5">
       <label className="label">
         <span className="label-text "> <BsHouseAdd className='inline text-2xl mr-1 rounded'/>District </span>
       </label>
       <input type="text" name='District' placeholder=" Enter you District address" className="input input-bordered "  required/>
     </div>
    <div className="form-control mt-5">
       <label className="label">
         <span className="label-text "> <BsHouseAdd className='inline text-2xl mr-1 rounded'/>Street Address</span>
       </label>
       <input type="text" name='StreetAddress' placeholder=" Enter you Street Address" className="input input-bordered " required />
     </div>
     <p></p>
     <div className='flex justify-end'>
     
     <button htmlFor="my_modal_6"  type='submit' className='btn mt-5 btn-primary  ' >Place Order</button>
     
     
     </div>
     </form>
    
     
  </div>
</div>
            



            
        </div>
    );
};

export default OderModer;