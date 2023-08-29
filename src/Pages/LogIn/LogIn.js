import React, { useContext } from 'react';
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvidor/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const LogIn = () => {
    const {login}=useContext(AuthContext)

    const loginhander=(event)=>{
        event.preventDefault()
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password)
        login(email,password)
        .then(result=>{
            const user=result.user;
            toast.success('Your Log in Successfully');
            <Toaster/>
            console.log(user)
        })
        .catch(error=>{console.log(error)
            const message=error.message
        })

    }


    return (
        <div>
            <div className=" bg-center place-items-center grid mt-10 mb-10 mr-4 ml-4  ">
 
    
   
 <div className="card flex-shrink-0 lg:w-1/3 md:w-2/3 w-full border   bg-gradient-to-t from-fuchsia-800 to-fuchsia-900   border-slate-900 ">
     <h1 className='lg:text-3xl md:text-3xl text-white  lg:ml-8 lg:mt-5 ml-16 mt-5 text-xl '>Log In Your ACCOUNT</h1>
    
     
   <div className="card-body">
     
      <form onSubmit={loginhander}>
   
     {/* 2 */}

     <div className="form-control">
       <label className="label">
         <span className="label-text text-white"> <AiOutlineMail className='inline text-2xl mr-2 rounded '/>Email</span>
       </label>
       <input type="email" name='email' placeholder="email" className="input input-bordered bg-fuchsia-800 text-white" />
     </div>
    

     <div className="form-control">
       <label className="label">
         <span className="label-text text-white "><RiLockPasswordLine className='inline text-2xl mr-2 rounded '/>Password</span>
       </label>
       <input type="password" name='password' placeholder="password" className="input input-bordered bg-fuchsia-800 text-white" />
       <label className="label">
         <span className="label-text-alt text-white"> You not singup plese <Link to='/singup' className=''>Sing up</Link></span>
       </label>
     </div>
     
     <div className="form-control mt-6">
       <button type='submit' className="btn bg-fuchsia-500 text-white">Log In</button>
     </div>
     </form>
   </div>
   
   
 </div>
 
</div>
          
            
        </div>
    );
};

export default LogIn;