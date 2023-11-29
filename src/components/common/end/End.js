import React from 'react'
import "./End.css"
import { FaInstagram,FaFacebook } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const End = () => {
  return (
    <div className='end'>
        <div className='endd'>
          <span style={{color:"white"}}>Help</span>
        </div>
        <div className='endd'>
          <span style={{color:"white"}}>Questions</span>
        </div>
        <div className='endd'>
          <FaInstagram style={{color:"white"}}/>
        </div >
        <div className='endd'>
          <FaFacebook style={{color:"white"}}/>
        </div>
        <div className='endd'>
          <CiLinkedin style={{color:"white"}}/>
        </div>
    </div>
  )
}


export default End
