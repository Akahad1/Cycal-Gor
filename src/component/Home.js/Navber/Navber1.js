import React from 'react';
import { Link } from 'react-router-dom';

const Navber1 = () => {
    return (
        <div>
            <div className="navbar bg-black">
  <div className="navbar-start">
   
    
            <span className=" lg:text-3xl lg:ml-6 md:ml-5 text-white  md:text-2xl sm:xl font-signature  normal-casetext-xl"> Cycal Gor</span>
    </div>
      <div className="  ">
   
            <input type="text" placeholder="Search Cycal Gor" className="input-bordered  md:w-96  lg:w-96 p-2" />
            
     
  
     </div>
  <div className="navbar-end">
              <Link className=' text-white   lg:text-xl md:mr-4 lg:mr-7'>My Order</Link>
  </div>
</div>
        </div>
    );
};

export default Navber1;