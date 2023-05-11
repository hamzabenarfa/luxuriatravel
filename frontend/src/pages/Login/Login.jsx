import React from 'react'
import './login.css'
import green from '../../assets/green.mp4'
import { Link } from 'react-router-dom'
import {FaUserShield} from 'react-icons/fa'
import {BsShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'
import logo from '../../assets/logo.png'
export default function Login() {
  return (
    <div className='loginPage flex'>
      <div className="container-login flex">
        <div className="videoDivAdmin">
          <video src={green} autoPlay muted loop typeof='video/mp4' ></video>
          <div className="textDiv">
            <h2 className="title">create accept remove destination</h2>
            <p>Adopt the peace of nature</p>
          </div>
          <div className="footerDiv flex">
          <span className="text">dont you have an acount?</span>
          <Link to={'/register'}>
            <button className='btn2'>Sign Up</button>
          </Link>
        </div>
        </div>

       

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo Image" />
            <h3>Welcome Back!</h3>
          </div>
          <form action="" className="form grid">

            <span>Login Status will go here</span>
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
              <span>Login</span>
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
