import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvidor/AuthProvider';

const Navber2 = () => {
  const {user,logOut}=useContext(AuthContext)

  const logOuthander=()=>{
    logOut()
    .then(()=>{})
    .then(error=>console.log(error))

  }

  
    return (
        <div>
            <div className="navbar bg-slate-800">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 text-white w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to='/' >Home</Link></li>
        <li><Link>Blogs</Link></li>
        <li><Link>Contact Us</Link></li>
      
        
      </ul>
    </div>
    <div className="avatar lg:flex md:flex  hidden">
  <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img alt='' src="/public/images/Logo.png" />
  </div>
</div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><Link to='/' className='text-xl text-white'>Home</Link></li>
        <li><Link className='text-xl  text-white'>Blogs</Link></li>
        <li><Link className='text-xl text-white'> Contact Us</Link></li>
        
    </ul>
  </div>
  <div className="navbar-end">
    

    {user?.uid?<button className='text-xl  text-white' onClick={logOuthander}>Log Out</button>
    :
    <>
    <Link to='/singup' className='text-xl  text-white'>Sing Up</Link>
    <Link to='/login' className='ml-5 mr-5 text-xl  text-white'>Log in</Link>
    </>
    }
  
   
  </div>
</div>
            
        </div>
    );
};

export default Navber2;