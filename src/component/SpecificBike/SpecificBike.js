import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ReactImageMagnify from 'react-image-magnify';
import { BiLogoFacebookCircle } from 'react-icons/bi';
import { FaInstagram } from 'react-icons/fa';
import { AiFillLinkedin ,AiOutlineTwitter} from 'react-icons/ai';

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import AddReview from '../Review/AddReview';
import { AuthContext } from '../../AuthProvidor/AuthProvider';
import Loading from '../../Hook/Loading';
import Relatedproduct from '../Relatedproduct/Relatedproduct';
import { Toaster, toast } from 'react-hot-toast';
import useTitel from '../../Hook/useTitel';





const SpecificBike = () => {
  
  const {user}=useContext(AuthContext)
    
    const {_id,name,price,img,ratings,category}=useLoaderData()
    
    const [togol,settogol]=useState('none')
    const [reviews,setReviws]=useState([])
    const[AllrelatedProducts,setRelatedProducts]=useState([])
    const notify = () => toast('Here is your toast.');
    // useTitel('SpecificBike')
    
    useEffect(()=>{
      fetch(`http://localhost:5000/products?bike=${category}`)
      .then(res=>res.json())
      .then(data=>setRelatedProducts(data))
    },[_id ,category])

    useEffect(()=>{
      fetch(`http://localhost:5000/reviews?review=${_id}`)
      .then(res=>res.json())
      .then(data=>setReviws(data))
  },[_id])
  console.log(AllrelatedProducts)


  const dataAddCart=()=>{
    const product={
      productId:_id,
      img,
      name,
      category,
      price,
      ratings,
      email:user?.email,
      


    }


    fetch('http://localhost:5000/addCart',{
            method:"POST",
            headers:{
                "content-type" : 'application/json'
            },
            body: JSON.stringify(product)
            
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.acknowledged){
               
               
              toast.success('Successfully add Product in Cart ');
               <Toaster/>
               
            }
        })

  }


  const {loading}=useContext(AuthContext)
    if(loading){
        return <Loading></Loading>
    }
  const numberOfIndexes =reviews.length;
  const id=`/buy/${_id}`
  
    return (
        <div>
            
            <div>
            <div  className='mt-20 mb-20 lg:mr-14 md:mr-14 h-2/4 mr-3 ml-3  lg:h-96 card lg:card-side  justify-center'>
  <figure>
    <div className=' lg:h-70 md:h-96 h-70  w-96   '>
    <ReactImageMagnify {...{
    smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: true,
        src: img,
    },
    largeImage: {
        src: img,
        width: 1100,
        height: 700
    }
}} />
...
    </div>
   
    </figure>
  <div className="">
   
    <div className="flex ml-10 lg:mt-[-3rem] md:ml-10 lg:justify-end  md:justify-center">
   <div>
   <h2 className='text-2xl font-style'>{name}</h2>
   <p className='mt-3 text-blue-400  mb-4 text-xl'>{price}</p>
   <p className=' mb-1'>Avarage Rating</p>
    <div >
      
      
    <Rating className='inline' style={{ maxWidth: 160 }} value={ratings} readOnly />
    
    </div>
    <div className="divider "></div> 
    <p className='text-blue-400 font-style mt-3 text-xl mb-4'>{category}</p>

    
    <p>Inclusive of all taxes</p>
    <div className='flex'>
      <p className='mr-2'>Share:</p>
      <Link className='mr-2 ' to={`https://www.facebook.com/sharer/sharer.php?u=http://localhost:3000/allproduct/${_id}`} ><BiLogoFacebookCircle className='h-5 mt-1'></BiLogoFacebookCircle ></Link>
      <Link className='ml-2 mr-2'><  FaInstagram className='h-5 mt-1'/></Link>
      <Link className='mr-2'><AiFillLinkedin className='h-5 mt-1'/></Link>
      <Link className='mr-2'><AiOutlineTwitter className='h-5 mt-1'/></Link>
    </div>
    <div className='mt-10'>
      {user?.uid?<button onClick={dataAddCart} className='btn bg-yellow-500'>Add to Cart</button>:''}
      <Link to={id}><button  className='btn bg-yellow-500 rounded ml-3'>Buy Now</button></Link>
      
    </div>
    <button onClick={notify}></button>
      <Toaster />
     
      
   </div>
    </div>
  </div>
  <div>

  </div>
</div>
            <div className=" divider "></div> 
            <div className='flex mb-10 justify-center'>
            <p className={togol==='none'?'text-2xl font-style mr-4 underline':'text-2xl font-style mr-4 '} onClick={()=>settogol('none')} >Reviews ({numberOfIndexes})  </p>

            <p className={togol==='clicked'?'text-2xl mr-4 font-style underline':'text-2xl font-style mr-4 '}onClick={()=>settogol('clicked')}>Related products</p>

            </div>
              <div className={togol==='clicked'?"hidden":""}>
                <AddReview id={_id}
                reviews={reviews}
                setReviws={setReviws}
                ></AddReview>
              </div>
              <div className={togol==='none'?"hidden ":"grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 lg:ml-16 md:ml-2 ml-5"}>
              {AllrelatedProducts.map(Rproducts=><Relatedproduct
            Rproducts={Rproducts}
            key={Rproducts._id}
            ></Relatedproduct>)}

              </div>
            </div>
            
        </div>
    );
};

export default SpecificBike;