import React from 'react'
import reactLogo from './assets/react.svg'
import './App.css';
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Nav from './Components/Nav';
import Skills from './Components/Skills';
import Project from './Components/Project';
import Achive from './Components/Achive';
import About from './Components/About';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

const App=()=>{
  return(
    <>
    <BrowserRouter>
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