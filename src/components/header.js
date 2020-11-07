import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from './image'
import { Link } from "gatsby"

import '../stylesheets/style.css'

const Header = () => {
  
  return(
  <header>
    <div className="headerContent">
   <Link to="/"><Image fileName="logo.png" alt="Header Logo" />
</Link>  
  <h1> Atölye Çamurdan  </h1>
 
  <ul>
    <li><Link to="/products" activeClassName="active" className="menu-item">Products</Link></li>
    <li><Link to="/projects" activeClassName="active" className="menu-item">Projects</Link></li>
    <li><Link to="/exhibitions" activeClassName="active" className="menu-item">Exhibitions</Link></li>
    <li><Link to="/about" activeClassName="active" className="menu-item">About Us</Link></li>
  </ul>
  </div>
  </header>
  )
}
  


export default Header
