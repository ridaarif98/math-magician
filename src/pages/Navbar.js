import React from "react";
import { Link } from "react-router-dom"

const Navbar = () => {
  const links = [
    {
        id: 1,
        path: "/Home",
        text: "Home",
    },
    {
        id: 2,
        path: "/Qoute",
        text: "Qoute",
    },
    {
        id: 3,
        path: "/",
        text: "Calculator",
    },
  ]
  return (
    <nav className="navBar">
      <h1> Math Magician</h1>
      <ul className="navBarLink">
        {links.map(link => {
          return <li key={link.id}>
             <Link to={link.path} className="links"> {link.text}</Link>
            </li>  
        })}
      </ul>
    </nav>
  );
}

export default Navbar;