import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import logo5 from "../assets/logo5.png";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <div className="nav">
        
        <div className="nav-logo-text">
        <div className="nav-logo">
          <img src={logo5} alt="SBDA Logo" className="nav-logo-img" />
        </div>
          <Link to="/" className="nav-logo-link">
            Systems Biology & Data Analytics Lab
          </Link>
        </div>
        <div className="nav-content">
          <ul className="nav_menu">
            <li className="nav-link">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-link">
              <Link to="/services">Services</Link>
            </li>
            <li className="nav-link">
              <Link to="/about">About</Link>
            </li>
            <li className="nav-link">
              <Link to="/teams">Team</Link>
            </li>
            <li className="nav-link nav-dropdown">
              <Link to="/research">Research</Link>
              <div className="nav-dropdown-content">
                <Link to="/projects">Projects</Link>
                <Link to="/publications">Publications</Link>
                <Link to="/products">Products</Link>
              </div>
            </li>
            <li className="nav-link">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="hamburger" onClick={toggleSidebar}>
          &#9776;
        </div>
      </div>

      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <a className="closebtn" onClick={toggleSidebar}>
          &times;
        </a>
        <Link to="/" onClick={toggleSidebar}>Home</Link>
        <Link to="/services" onClick={toggleSidebar}>Services</Link>
        <Link to="/about" onClick={toggleSidebar}>About</Link>
        <Link to="/teams" onClick={toggleSidebar}>Team</Link>
        <Link to="/research" onClick={toggleSidebar}>Research</Link>
        <Link to="/projects" onClick={toggleSidebar}>Projects</Link>
        <Link to="/publications" onClick={toggleSidebar}>Publications</Link>
        <Link to="/products" onClick={toggleSidebar}>Products</Link>
        <Link to="/contact" onClick={toggleSidebar}>Contact</Link>
      </div>
    </>
  );
};

export default Navbar;
