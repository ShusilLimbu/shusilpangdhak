import React from 'react';

const Project=(props)=>{
    return(
        <>
        <div className='project' style={props.darkVariables}>
            <h3>My Projects :</h3>
            <ul type='none'>
                <li>Portofolio Website using React Js</li>
                <li><a href=''>Go: Github</a></li>
            </ul>

        </div>
        </>
    )
}; 
export default Project;