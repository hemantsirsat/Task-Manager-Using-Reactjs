import React from 'react';

const Taskdisplay=({title, description})=>{
    return(
        <div className='task-display'>
            <h2 className='task-heading'>{title}</h2>
            <p className='task-description'>{description}</p>
        </div>
    )
    
}

export default Taskdisplay;