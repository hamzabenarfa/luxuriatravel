import React from 'react'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineCheckSquare } from "react-icons/ai";
import useFetch from '../../hooks/useFetch';
import './main.css'
function Main() {
  const url = process.env.REACT_APP_URL;
  const { data } = useFetch(`${url}/destination`);
  console.log(data)

  return (
<section className='main container section'>
<div className="secTitle">
  <h3 className="title">
    Most Visited destinations 
  </h3>
</div>

<div className="secContent grid">

{ data ?( 
      data.map((item) => (
     <div  key={item.id} className='singleDestination'>
      
        <div className="imageDiv">
            <img src={item.imgSrc} alt={"image de : "+item.destTitle} />
        </div>
        <div className="cardInfo">
            <h4 className="destTItle">{item.destTitle}</h4>
            <span className="content flex">
                <HiOutlineLocationMarker className="icon" />
                <span className="name">{item.location}</span>
            </span>

            <div className="fee flex">
                <div className="grade">
                    <span>Price :<small></small></span>
                </div>
                <div className="price">
                    <h5>{item.fees}</h5>
                </div>
            </div>
            <div className="desc">
                <p>{item.description}</p>
            </div>
            <button className='btn flex'>
                DETAILS <AiOutlineCheckSquare className="icon" />
            </button>
        </div>


    </div>
      )
  )):<h1>Loading</h1>
}
</div>
</section>  
  )}
export default Main