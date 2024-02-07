import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai';

const Navbar = () => {

    const[toggle,setToggle]=useState(false)
    const handleclick =()=> setToggle(!toggle)



  return (
    <>
    <div className='w-full h-[80px] bg-white '>
        <div className='max-w-[1280px]  m-auto w-full h-full flex justify-between items-center'>
            <p className='font-bold text-3xl font-serif  text-red-500'>BLOG

           
            </p>
            
            <nav className=''>
            <ul className=' hidden md:flex gap-8 font-bold '>
                <li className='hover:text-yellow-500'><Link to='/'>Home</Link></li>
                <li className='hover:text-yellow-500'><Link to='/about'>About</Link></li>
                <li className='hover:text-yellow-500'><Link to='/projects'>Project</Link></li>
                
            </ul>

            </nav>
            <div className='flex '>
            <input type='text'className='rounded-lg bg-gray-100'
            placeholder='Search..'
             ></input><button className='mb-1 bg-gray-100 rounded-lg ' ><AiOutlineSearch className=' text-2xl font-bold'/></button>
            </div>
           
            <div className='hidden md:flex'>
              
                <button className='px-8 py-3 rounded font-bold text-white bg-yellow-500'><Link to='/signin'>Sign In</Link></button>
            </div >
            <div className='md:hidden mr-5 flex text-2xl float-end' onClick={handleclick}>
            <FontAwesomeIcon icon={toggle?open:faBars} />
            <div className={toggle?close:'hidden'}>
            <FontAwesomeIcon icon={faXmark} />

            </div>
            

            </div>
          
           </div>
           <div >
            <ul className={toggle?'absolute z-10 p-4 bg-white space-y-4 w-full font-bold md:hidden':'hidden'}>
            <li className='hover:text-yellow-500 p-4 hover:bg-gray-100'> <Link to='/'>Home</Link></li>
            <li className='hover:text-yellow-500 p-4 hover:bg-gray-100'><Link to='/about'>About</Link></li>
            <li className='hover:text-yellow-500 p-4 hover:bg-gray-100'><Link to='/projects'>Project</Link></li>
            

            <div className=''>
                
                <button className='px-8 py-3 rounded font-bold text-white bg-yellow-500 '><Link to='/signin'> Sign In</Link></button>
            </div >
                
            </ul>
           
           </div>
          


        

    </div>
    </>
  )
}

export default Navbar