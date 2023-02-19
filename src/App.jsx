import React from 'react'
import './App.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Nav from './Components/Nav';
import Project from './Components/Project';
import Achive from './Components/Achive';
import About from './Components/About';
import Home from './Components/Home';
import Skills from './Components/Skills';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

const App=()=>{
  return(
    <>
    <BrowserRouter basename='/shusilpangdhak/'>
    <Header/>
    <Nav/>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route  path='/skills' element={<Skills/>}></Route>
    <Route  path='/project' element={<Project/>}></Route>
    <Route   path='/achive' element={<Achive/>}></Route>
    <Route   path='/about' element={<About/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
};
export default App;