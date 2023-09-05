import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvidor/AuthProvider';

const Navber1 = () => {
  const {search,setSearch}=useContext(AuthContext)

    const searchRef=useRef(null)
    const handleKeyDown=(event)=>{
      if (event.key === 'Enter') {
        
      setSearch(searchRef.current.value)
      console.log(searchRef.current.value)
      console.log('Enter key pressed');
      }

    }
   
    const searchHander=(event)=>{
        console.log(searchRef.current.value)
        setSearch(searchRef.current.value)
    }
    return (
        <div>
            <div className="navbar bg-slate-900">
  <div className="navbar-start">
   
    
            <span className=" lg:text-3xl lg:ml-6 md:ml-5 text-white  md:text-2xl sm:xl font-signature  normal-casetext-xl"> Cycal Gor</span>
    </div>
      <div className="  ">
   
            {/* <input type="text" placeholder="Search Cycal Gor" className="input-bordered  " /> */}

    <div className="form-control">
  <div className="input-group">
    <input onKeyDown={handleKeyDown} type="text" ref={searchRef} placeholder="Search…" className="input input-bordered md:w-96  lg:w-96 p-2" />
    <button onClick={searchHander} className="btn btn-square">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
</div>
     
  
     </div>
  <div className="navbar-end">
              <Link to='/myorder' className=' text-white font-style  lg:text-xl md:mr-4 lg:mr-7'>My Order</Link>
  </div>
</div>
        </div>
    );
};

export default Navber1;