import React from 'react';
import { RxAvatar, } from 'react-icons/rx';
import { AiOutlineMail,AiFillPhone, } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
const Singup = () => {
    return (
        <div>
            <div className=" bg-center place-items-center grid mt-10 mb-10 mr-4 ml-4  ">
 
    
   
    <div className="card flex-shrink-0 lg:w-1/2 md:w-2/3 w-full border   bg-gradient-to-t from-fuchsia-800 to-fuchsia-900   border-slate-900 ">
        <h1 className='lg:text-3xl md:text-3xl text-white  lg:ml-8 lg:mt-5 ml-16 mt-5 text-xl '>CREATE NEW ACCOUNT</h1>
        
      <div className="card-body">
        {/* 1/ */}
      <div className="form-control">
          <label className="label">
            <span className="label-text text-white"><RxAvatar className='inline text-2xl mr-2 rounded '/> Full Name</span>
          </label>
          <input type="text" placeholder='Full Name' className="input input-bordered bg-fuchsia-800 text-white" />
        </div>
        {/* 2 */}

        <div className="form-control">
          <label className="label">
            <span className="label-text text-white"> <AiOutlineMail className='inline text-2xl mr-2 rounded '/>Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered bg-fuchsia-800 text-white" />
        </div>
        {/* 3 */}

        <div className="form-control">
          <label className="label">
            <span className="label-text text-white"> <AiFillPhone className='inline text-2xl mr-1 rounded'/>Phone Number</span>
          </label>
          <input type="number" placeholder="Phone Number" className="input input-bordered bg-fuchsia-800 text-white" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-white "><RiLockPasswordLine className='inline text-2xl mr-2 rounded '/>Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered bg-fuchsia-800 text-white" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-fuchsia-500 text-white">Sing Up</button>
        </div>
      </div>
    </div>
  </div>
</div>
            

            
        
    );
};

export default Singup;