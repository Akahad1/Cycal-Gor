import React, { useContext } from 'react';
import '../AllProduct/Product.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvidor/AuthProvider';
import Loading from '../../../Hook/Loading';


const Product = ({products}) => {
  const {loading}=useContext(AuthContext)
    const {_id,name,img,category,price}=products
    const id=`/buy/${_id}`

    if(loading){
      return<Loading></Loading>
    }
   
    return (
        <div>
            <div className="card    border-blue-950 mb-10 lg:w-96 md:w-96 w-80 ml-5 border">
  <figure className='transition duration-300 ease-in-out'><Link to={_id}><img className='h-64 w-full ' src={img} alt="" /></Link></figure>
  <div className=" items-center text-center mt-6 mb-6">
    <div>
     <h1 >{category}</h1>
    <h1 className='ml-4 '>{name}</h1>
   
    <h1><span className='text-xl'>৳</span>{price}</h1>
    <Link to={id} ><button class=" btn mt-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  hover:to-yellow-500 ">Buy Now</button></Link>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Product;