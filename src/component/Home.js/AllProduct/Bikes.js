import React from 'react';

const Bikes = ({bike}) => {
    const {name,img,category,price}=bike
    return (
        <div>
             <div className="card    border-blue-950 mb-10 lg:w-96 md:w-96 w-80 ml-5 border">
  <figure className='transition duration-300 ease-in-out'><img className='h-64 w-full ' src={img} alt="" /></figure>
  <div className=" items-center text-center mt-6 mb-6">
    <div>
     <h1 >{category}</h1>
    <h1 className='ml-4 '>{name}</h1>
   
    <h1>{price}</h1>
    <button class=" btn mt-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  hover:to-yellow-500 ">Buy Now</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Bikes;