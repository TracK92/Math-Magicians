import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home |',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator |',
    },
    {
      id: 3,
      path: '/quote',
      text: 'Quote',
    },
  ];
  return (
    <div className="navContainer">
      <div>
        <h1>Math Magicians</h1>
      </div>
      <div>
        <nav className="navBar">
          <ul>
            {links.map((link) => (
              <li key={link.id}>
                <NavLink to={link.path}>{link.text}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
