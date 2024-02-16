import React from 'react'
import {Link,} from 'react-router-dom'

function signin() {

  
  return (
    <>
    <div className='min-h-screen mt-20'>
      <div className=''></div>
       {/*left*/}
      <div className=''></div>
      {/*right*/}
      <div className='p-3 max-w-lg mx-auto'>
      <form  className='flex flex-col gap-4'>
      
      
    
    
      <input type="email" placeholder='Email'
      id='email' className='bg-slate-100 p-3 rounded-lg' 
      />

      <input type="password" placeholder='Password'
      id='password' className='bg-slate-100 p-3 rounded-lg' 
      />

      <button className='bg-slate-700 text-white p-2 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
        Sign In</button>
        
  

    </form>
    <div className='flex gap-2 mt-5'>
      <p>Have an account? </p>
      <Link to='/signup'> 
      <span className='text-blue-500'>sign up</span>
      </Link>
      
    </div>
 
      </div>
    </div>
    
    
    </>
  )
}

export default signin