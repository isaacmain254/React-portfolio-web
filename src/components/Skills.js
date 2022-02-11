import React from 'react';
import { BiCodeAlt} from "react-icons/bi";
import { FaHtml5, FaCss3, FaPython, FaReact, FaBootstrap, FaGithub} from "react-icons/fa";
import { SiJavascript, SiDjango, SiLinux} from "react-icons/si";

import './skills.css';

function Skills() {
  return (
      <div className='skills' id="skills"> 
          <div className='max-width'>
                <h2 className='skills-heading'><BiCodeAlt />Technologies</h2>
                <p className='skills-intro'>I've worked with a range of technologies in web development world from Design to Development</p>
                <div className='skills-body'>
                    <div className='languages'>
                        <h3>Programming Languages</h3>
                        <div className='language-list'>
                           <ul>
                               <li><FaHtml5 color=''/>Html</li>
                               <li><FaCss3 color=''/>Css</li>
                               <li><SiJavascript color=''/>JavaScript</li>
                               <li><FaPython color='blue'/>Python</li>
                           </ul>
                        </div>
                    </div>
                    <div className='technologies'>
                        <div className='frameworks'>
                            <h3>Frameworks</h3>
                            <div className='row-1'>
                                <ul>
                                    <li><FaReact color=' #1E90FF' />React</li>
                                    <li><SiDjango color='green' />Django</li>
                                    <li><FaBootstrap color='purple'/>Bootstrap</li>
                                </ul>
                            </div>
                        </div>
                        <div className='other-tech'>
                            <h3>Other Technologies</h3>
                            <div className='row-2'>
                                <ul>
                                    <li><FaGithub  />Git</li>
                                    <li><SiLinux  />Linux</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
      </div>
  );
}

export default Skills;
