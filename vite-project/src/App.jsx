import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './page/Home';
import About from './page/About';
import Projects from './page/Projects'
import Dashboard from './page/Dashboard'
import Signin from './page/Signin';
import Signup from './page/Signup';


function App() {
  return (
    <>
    <BrowserRouter>

    <Navbar/>


    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/about'element={<About/>}/>
      <Route path='/projects'element={<Projects/>}/>
      <Route path='/dashboard'element={<Dashboard/>}/>
      <Route path='/signin'element={<Signin/>}/>
      <Route path='/signup'element={<Signup/>}/>
    </Routes>
    
    </BrowserRouter>
    
    </>
  )
}

export default App