
import { RxAvatar, } from 'react-icons/rx';
import { AiOutlineMail,AiFillPhone, } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import { FaGoogle ,FaFacebook} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvidor/AuthProvider';
const Singup = () => {
  const {loginwithgoogle,createEamilPassword}=useContext(AuthContext)


  const singUpinPassword=(event)=>{
    event.preventDefault()
    const form =event.target
    const name =form.name.value
    const email =form.email.value;
    const number=form.number.value
    
    const password =form.password.value;
    console.log(name,email,number,password)
    createEamilPassword(email,password)
    .then(result=>{
      const user=result.user;
      console.log(user)
    })
    .catch(error=>{console.log(error)
      const message =error.message;
    })


    

  }
  

  const googleLogInhanle=(event)=>{
    event.preventDefault()
    loginwithgoogle()
    .then(result=>{
      const user=result.user;
      // setCreateUserEmail(user.email)
      console.log(user)
    })
    .catch(error=>console.log(error))
  }


    return (
        <div>
          
          <div className=" bg-center place-items-center grid mt-10 mb-10 mr-4 ml-4  ">
 
    
   
 <div className="card flex-shrink-0 lg:w-1/2 md:w-2/3 w-full border   bg-gradient-to-t from-fuchsia-800 to-fuchsia-900   border-slate-900 ">
     <h1 className='lg:text-3xl md:text-3xl text-white  lg:ml-8 lg:mt-5 ml-16 mt-5 text-xl '>CREATE NEW ACCOUNT</h1>
    
     
   <div className="card-body">
     {/* 1/ */}
      <form onSubmit={singUpinPassword}>
   <div className="form-control">
       <label className="label">
         <span className="label-text text-white"><RxAvatar className='inline text-2xl mr-2 rounded '/> Full Name</span>
       </label>
       <input type="name" name='name' placeholder='Full Name' className="input input-bordered bg-fuchsia-800 text-white" />
     </div>
     {/* 2 */}

     <div className="form-control">
       <label className="label">
         <span className="label-text text-white"> <AiOutlineMail className='inline text-2xl mr-2 rounded '/>Email</span>
       </label>
       <input type="email" name='email' placeholder="email" className="input input-bordered bg-fuchsia-800 text-white" />
     </div>
     {/* 3 */}

     <div className="form-control">
       <label className="label">
         <span className="label-text text-white"> <AiFillPhone className='inline text-2xl mr-1 rounded'/>Phone Number</span>
       </label>
       <input type="number" name='number' placeholder="Phone Number" className="input input-bordered bg-fuchsia-800 text-white" />
     </div>

     <div className="form-control">
       <label className="label">
         <span className="label-text text-white "><RiLockPasswordLine className='inline text-2xl mr-2 rounded '/>Password</span>
       </label>
       <input type="password" name='password' placeholder="password" className="input input-bordered bg-fuchsia-800 text-white" />
       <label className="label">
         <span className="label-text-alt text-white"> You already singup plese <Link to='/login' className=''>Log in</Link></span>
       </label>
     </div>
     <div className='    '>
     <button onClick={googleLogInhanle} className="btn   md:ml-24  lg:ml-8 md:ml btn-primary "><FaGoogle className='inline mr-2 text-xl'/>Continue with Google</button>

     <div className="divider lg:hidden   text-white">OR</div>

     <button  className="btn  md:ml-24 btn-primary text-white lg:ml-32"><FaFacebook className='inline  text-white mr-3 text-xl'/>Continue with Facebook </button>
     </div>
     <div className="form-control mt-6">
       <button type='submit' className="btn bg-fuchsia-500 text-white">Sing Up</button>
     </div>
     </form>
   </div>
   
   
 </div>
 
</div>
          
            
</div>
            

            
        
    );
};

export default Singup;