import React from 'react'
import "./Header.css"
import { FaSearch} from "react-icons/fa";
import { MdTrolley } from "react-icons/md";
import { CiLogin } from "react-icons/ci";


const Header = () => {
  return (
    <div className='header'>
      <header>
        <div className='logo'>
            <h2>Ecommerce</h2>
        </div>
        <div className='busqueda'>
        <input class="Search" type="text" placeholder="Search product..." name="name" autocomplete="off" data-listener-added_87bd841c="true"/>
        <div className='icono' >
         <a href='#'><FaSearch style={{color:"white"}} /></a>
        </div>
        </div>
        <div className='botones'>

            <div className='carrito'> <a  href='#'>Trolley </a><MdTrolley style={{color:"white"}}/></div>
           
            
            <div className='login'><a  href='#'>Log in </a><CiLogin style={{color:"white"}} /></div>
            
        </div>
      </header>
    </div>
  )
}

export default Header
