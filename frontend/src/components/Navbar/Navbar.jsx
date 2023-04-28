import React, { useState, useRef, useEffect } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { IoDiamond,IoMenu } from "react-icons/io5";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const headerRef = useRef(null);
  const [headerWidth, setHeaderWidth] = useState(0);

  useEffect(() => {
    setHeaderWidth(headerRef.current.offsetWidth);
  }, [toggle]);

  return (
    <>
      <section className="navBarSection">
        <header className="header flex" ref={headerRef}>
          <div className="logoDiv">
            <Link to='/' className="logo flex">
              <h1><IoDiamond className='icon' />Luxuria Travel</h1>
            </Link>
          </div>
          {(headerWidth > 768 & !toggle )&& (
            <div className="navBar">
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
            </div>
          )}
          <div className="toggleNavbar">
            <IoMenu className='icon' onClick={()=>setToggle(!toggle)}/>
          </div>
        </header>
      </section>
    </>
  );
}
