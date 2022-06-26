import React from "react";
import './File.css'

const File = ({name, description}) =>{
    return(
        <div className='piece'>
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    );
}

export default File;