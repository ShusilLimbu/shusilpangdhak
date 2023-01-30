import React, { useState } from 'react';

const Header=(props)=>{
    return(
        <>
        <header style={props.darkVariables}>
        <a href="./src/assets/a.png"><img src='./src/assets/a.png' alt="Shusil Pangdhak"/></a>
            <div>
            <p>Shusil Pangdhak</p>
            <span>React Js Developer</span>
            </div>
            <a href='#'><img className='github' src='./src/assets/github.png'></img></a>
            <div className="form-check form-switch" id='darkmode' onClick={props.enableDark}>
            <input className="form-check-input bg-info" type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckChecked"></label>
            </div>  
        </header>
        </>
    )
};
export default Header;