import React, { useState } from 'react'
import {Link,} from 'react-router-dom'

function signup() {

  const [formData, setFormData]=useState({});
  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
    
  }; 
  return (
    <>
    <div className='min-h-screen mt-20'>
      <div className=''></div>
       {/*left*/}
      <div className=''></div>
      {/*right*/}
      <div className='p-3 max-w-lg mx-auto'>
      <form  className='flex flex-col gap-4'>
      
      <input type="text" placeholder='Username'
      id='username' className='bg-slate-100 p-3 rounded-lg' 
      onChange={handleChange}/>
    
    
      <input type="email" placeholder='Email'
      id='email' className='bg-slate-100 p-3 rounded-lg' 
      onChange={handleChange}/>

      <input type="password" placeholder='Password'
      id='password' className='bg-slate-100 p-3 rounded-lg' 
      onChange={handleChange}/>

      <button className='bg-slate-700 text-white p-2 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
        Sign Up</button>
        
  

    </form>
    <div className='flex gap-2 mt-5'>
      <p>Have an account? </p>
      <Link to='/signin'> 
      <span className='text-blue-500'>sign in</span>
      </Link>
      
    </div>
 
      </div>
    </div>
    
    
    </>
  )
}

export default signup