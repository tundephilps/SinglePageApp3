import React from 'react'
import "./Header.css";
//import { useNavigate } from 'react-router-dom';

//import Logo from "../images/logo.svg";





const Header = () => {

 // let navigate = useNavigate();

  return (
    
    <div id='navbar'>
      
    <a href="/" class="logo">CORP</a>
    <input class="menu-btn" type="checkbox" id="menu-btn" />
    <label class="menu-icon" for="menu-btn"><span class="nav-icon"></span></label>
    <ul class="menu">
        <li><a href="#Home" >Home</a></li>
        <li><a href="#Contact">Contact</a></li>
        <li><a href="#Services" >Services</a></li>
        <li><a href="#Performance" >Performance</a></li>
        <li><a href="#Pricing" >Pricing</a></li>
        <li><a href="#Projects" >Projects</a></li>
        <li><a href="#Team" >Our Team</a></li>
    </ul>
</div>
    
  
  )
}




export default Header;
