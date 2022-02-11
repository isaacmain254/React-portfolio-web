import React from 'react';
import { data } from '../data';
import Card from './Card';

import './Projects.css'

const Projects = () => {
  return (
      
      <div className='projects' id='projects'>
          <h1>Projects</h1>  
          <div className='project-cards'>  
          {data.map(card => (
            <Card key={card.id} card={card}/>
          ))}
          </div>   
      </div>
  )
};

export default Projects;
