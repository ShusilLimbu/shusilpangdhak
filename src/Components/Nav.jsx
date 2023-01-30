import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav=(props)=>{
    return(
        <>
        <nav style={props.darkVariables}>
            <ul type='none'>
                <li><NavLink to='/' id='navlink'>Home</NavLink></li>
                <li><NavLink to='/skills' id='navlink'>Skills</NavLink></li>
                <li><NavLink to='/about' id='navlink'>About me</NavLink></li>
                <li><NavLink to='/project' id='navlink'>Projects</NavLink></li>
                <li><NavLink to='/achive' id='navlink'>Achievements</NavLink></li>
            </ul>
        </nav>
        </>
    )
};
export default Nav;