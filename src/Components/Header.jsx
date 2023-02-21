import React, { useState } from 'react';

let n=localStorage.getItem('on_load_counter');
    if(n===0){
        n=0;
    }
    n++;
    localStorage.setItem('on_load_counter',n);
    

const Header=(props)=>{
    return(
        <>
        <header style={props.darkVariables}>
            <span id='count-visiter'>Visiters:{n-1}</span>
        <a href="./a.png"><img src='./a.png' alt="Shusil Pangdhak"/></a>
            <div>
            <p>Shusil Pangdhak</p>
            <span>React Js Developer</span>
            </div>
            <a href='https://github.com/ShusilLimbu'><img className='github' src='./github.png'></img></a>
            <div className="form-check form-switch" id='darkmode' onClick={props.enableDark}>
            <input className="form-check-input bg-info" type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckChecked"></label>
            </div>  
        </header>
        </>
    )
};
export default Header;