import React from "react"
import Img from "gatsby-image"
import '../stylesheets/style.css'
import { useIntl, Link,  changeLocale } from "gatsby-plugin-intl"



const Header = ({image}) => {

  const intl = useIntl()

  let language =intl.locale=="tr"?"en":"tr";
  

  return(
  <header>
    <div className="headerContent">
    <div className="logo">
    <Link to="/"><Img fluid = {image } alt="I hope it works" style={{ maxHeight: "100%" }}  imgStyle={{ objectFit: "contain" }} /></Link>
    </div>
  <h1> Atölye Çamurdan  </h1>
 
  <ul>
    <li><Link to="/products" activeClassName="active" className="menu-item">{intl.formatMessage({ id: "headerProduct" })}</Link></li>
    <li><Link to="/workshop" activeClassName="active" className="menu-item">{intl.formatMessage({ id: "headerWorkshops" })}</Link></li>
    <li><Link to="/exhibitions" activeClassName="active" className="menu-item">{intl.formatMessage({ id: "headerExhibitions" })}</Link></li>
    <li><Link to="/about" activeClassName="active" className="menu-item">{intl.formatMessage({ id: "headerAbout" })}</Link></li>
    <li onClick= {()=>{changeLocale(language)}} className="languageSwitch"> {intl.locale=="tr"?"En":"Tr"}</li>
  </ul>
  </div>
  </header>
  )
}




export default Header
