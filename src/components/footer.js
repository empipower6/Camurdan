import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from './image'
import Img from 'gatsby-image'
import { useIntl, Link,  changeLocale } from "gatsby-plugin-intl"
import {Helmet} from "react-helmet";


const Footer = ({image}) =>{

    const intl = useIntl()

    return (
        <>
            <Helmet>

                <script src="https://kit.fontawesome.com/17ccd0b195.js" crossorigin="anonymous"></script>

            </Helmet>

            <footer>
                <div className="footer-section-1">
                    <Link to="/"><Img fluid = {image} alt="I hope it works" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }} /></Link>
                </div>
               
                <div className="footer-section-2">
                    <h1> Atölye Camurdan </h1><br/>
                    <p> 100. Yıl, Hülya Sk. No:41, <br /> 06700 Çankaya/Ankara, Turkey </p> <br/>
                    <p>  +90 312 426 26 74</p>

                </div>
              
                <div className="footer-section-3">

                    <div className="socialMedia">

                        <a href="https://www.instagram.com/atolyecamurdan/" className="instagram" target="_blank"><i className="fab fa-instagram"></i></a>
                        <a href="https://www.facebook.com/atolye.camurdan.41/" className="facebook" target="_blank"><i className="fab fa-facebook-f"></i></a>
                        
                    </div>
                    <p> {intl.formatMessage({ id: "footerName" })}</p>


                </div>
                
            </footer>
    </>
    )
}

export default Footer;