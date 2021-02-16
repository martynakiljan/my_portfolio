import React from 'react';
import '../../style/App.css';

const Project = ({key, name, description, live, urlcode} )=> {


  return (
    <div>   
            <p>{name}</p> 
            <p>{description}</p>
            <a>{live}</a> 
            <a>{urlcode}</a> 

    </div>
  );
};
export default Project;