import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/calculator.png';

function Navbar() {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/Quote',
      text: 'Quote',
    },
  ];
  return (
    <nav className="navBar">
      <div>
        <img src={logo} alt="logo" />
        <h1> Math Magician</h1>
      </div>
      <ul className="navBarLink">
        {links.map(link => 
          <li key={link.id}>
            <Link to={link.path} className="links">
              {link.text}
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
