import React from 'react'
import "./Products.css"
import { FaMouse } from "react-icons/fa";
import { SiWebcomponentsdotorg } from "react-icons/si";
import { FaComputer } from "react-icons/fa6";
import { MdComputer } from "react-icons/md";

const Products = () => {
  return (
    <div className='products'>

        <div className='productos'>
        <a href='/Pheriperals'>peripherals</a><FaMouse />
        </div>
        <div className='productos'>
        <a href='/Components'>components</a><SiWebcomponentsdotorg/>
        </div>
        <div className='productos'>
        <a href='Notebook'>notebook</a><MdComputer/>
        </div>
        <div className='productos'>
        <a href='#'>build your PC</a><FaComputer/>
        </div>
      
      
      
      
    </div>
  )
}

export default Products


