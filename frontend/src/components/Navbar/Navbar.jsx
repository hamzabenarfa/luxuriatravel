import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { IoDiamond,IoMenu } from "react-icons/io5";
import { CiCircleRemove } from "react-icons/ci";
export default function Navbar() {
  const [toggle, setToggle] = useState("navBar");

  const showNavbar = () => {

      setToggle("navBar activeNavbar");
    
  };
  const removeNavbar = () => {
     setToggle("navBar");
  };


  return (
    <>
      <section className="navBarSection">
        <header className="header flex" >
          <div className="logoDiv">
            <Link to='/' className="logo flex">
              <h1><IoDiamond className='icon' />Luxuria Travel</h1>
            </Link>
          
          </div>
 
            <div className={toggle}>
              <ul className="navLists flex">
                <li className="navItem">
                  <Link to='/' className="navLink">Home</Link>
                </li>
                <li className="navItem">
                  <Link to='/' className="navLink">Order</Link>
                </li>
                <li className="navItem">
                  <Link to='/' className="navLink">Tour</Link>
                </li>
                <button className='btn'>
                  <Link to='/'>LogIn</Link>
                </button>
              </ul>
              <div className='closeNavbar' onClick={(removeNavbar)}>
             <CiCircleRemove className="icon"/>
          </div>
            </div>

      

          <div className="toggleNavbar">
            <IoMenu className='icon' onClick={(showNavbar)}/>
          </div>
        </header>
      </section>
    </>
  );
}
