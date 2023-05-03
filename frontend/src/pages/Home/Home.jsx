import {React , useEffect} from 'react'
import './home.css'
import ocean from '../../assets/ocean.mp4'
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FaTwitter,FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";

import Aos from 'aos';
import 'aos/dist/aos.css';

import Main from '../../components/Main/Main'
export default function Home() {

  useEffect(() => {
    Aos.init({duration: 2000});
  }, [])


  return (
    <>
    <section className='home'>
      <div className="overlay"></div>
      <video src={ocean} type="video/mp4" muted autoPlay loop></video>

      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos='fade-up' className="smallText">
            Our packages
          </span>
          <h1 data-aos='fade-up'className="homeTitle">
            Srearch your Holiday
          </h1>
        </div>

        <div data-aos='fade-up' className="cardDiv grid">

          <div className="destinationInput">
            <label htmlFor="city"> Search your destination:</label>
            <div className="input flex">
              <input type="text "
                placeholder='Enter name Here ...' />
              <GrLocation className='icon' />
            </div>

          </div>
          <div className="dateInput">
            <label htmlFor="date"> Select your date:</label>
            <div className="input flex">
              <input type="date" />
            </div>

          </div>
          <div className="priceInput">
            <div className="lable_total flex">
              <label htmlFor="price">Max price:</label>
              <h3 className='total'>5000$</h3>
            </div>
            <div className="input flex">
              <input type="range" min='0' max='5000' step='100' />

            </div>

          </div>
          <div className="searchOptions flex">
              <HiFilter className='icon' />
              <span>More FILTERS</span>
          </div>

        </div>

        <div data-aos='fade-up' className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className='icon' />
            <FaInstagram className='icon' />
            <FaTwitter className='icon' />
          </div>
          <div className="lefticons">
            <BsListTask className='icon' />
            <TbApps className='icon' />
          </div>
        </div>
      </div>

   </section>
   
   <Main /> 
</>
  )
}
