import React from 'react'
import './register.css'

import green from '../../assets/green.mp4'
import { Link } from 'react-router-dom'
import {FaUserShield} from 'react-icons/fa'
import {BsShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'
import {HiOutlineMailOpen}  from 'react-icons/hi'
import logo from '../../assets/logo.png'

function Register() {
  return (
    <div className='registerPage flex'>
    <div className="container-register flex">
      <div className="videoDivRegister">
        <video src={green} autoPlay muted loop typeof='video/mp4' ></video>
        <div className="textDiv">
          <h2 className="title">Explore the World with Us</h2>
          <p>Dream Destinations</p>
        </div>
        <div className="footerDiv flex">
        <span className="text">You have an acount?</span>
        <Link to={'/login'}>
          <button className='btn2'>Log In</button>
        </Link>
      </div>
      </div>

     

      <div className="formDiv flex">
        <div className="headerDiv">
          <img src={logo} alt="Logo Image" />
          <h3>Let Us Know You!</h3>
        </div>
        <form action="" className="form grid">

        <div className="inputDiv">
            <label htmlFor="email">Email</label>
            <div className="input flex">
              <HiOutlineMailOpen className="icon" />
              <input type="email" className="email" placeholder='Enter email' />
            </div>
          </div>

          <div className="inputDiv">
            <label htmlFor="username">username</label>
            <div className="input flex">
              <FaUserShield className="icon" />
              <input type="text" className="username" placeholder='Enter Username' />
            </div>
          </div>

          <div className="inputDiv">
            <label htmlFor="password">password</label>
            <div className="input flex">
              <BsShieldLockFill className="icon" />
              <input type="password" className="password" placeholder='Enter password' />
            </div>
          </div>

          <button type='submit' className='btn2 flex'>
            <span>Register</span>
            <AiOutlineSwapRight className="icon" />
          </button>
          <span className='forgotPassword'>
            Forgot your password ? <Link>Click here</Link>
          </span>
        </form>
      </div>

    </div>
  </div>
  )
}

export default Register