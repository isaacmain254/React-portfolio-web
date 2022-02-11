import React, {useState}  from 'react';
import './Header.css';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick =() => setClick(!click);
    const CloseMobileMenu = () => setClick(false);

    
  return(
      <nav className='navbar'>
          <div className='navbar-container'>
              <a href='#home' className='navbar-logo' onClick={CloseMobileMenu}>Links</a>
              <div className='menu-icon' onClick ={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
              </div>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-item'>
                      <a href='#home' className='nav-links' onClick={CloseMobileMenu }>Home</a>
                  </li>
                  <li className='nav-item'>
                      <a href='#about' className='nav-links' onClick={CloseMobileMenu }>About</a>
                  </li>
                  <li className='nav-item'>
                      <a href='#resume' className='nav-links' onClick={CloseMobileMenu }>Resume</a>
                  </li>
                  <li className='nav-item'>
                      <a href='#skills' className='nav-links' onClick={CloseMobileMenu }>Skills</a>
                  </li>
                  <li className='nav-item'>
                      <a href='#projects' className='nav-links' onClick={CloseMobileMenu }>Projects</a>
                  </li>
                  <li className='nav-item'>
                      <a href='#contact' className='nav-links' onClick={CloseMobileMenu }>Contact</a>
                  </li>
              </ul>
          </div>
      </nav>
  );
}

export default Navbar;
