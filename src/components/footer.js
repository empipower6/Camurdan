import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from './image'
import { Link } from "gatsby"

const Footer = () =>{

    return (
        <footer>
            <p> Created by Yaygara Design</p>
            <Link to="/"><Image fileName="logoBeyaz.jpeg" alt="Footer Logo" /> </Link>
            
        </footer>

    )
}

export default Footer;