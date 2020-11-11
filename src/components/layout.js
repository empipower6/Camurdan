import React from 'react'
import Header from './header'
import Footer from './footer'
import { useStaticQuery, graphql } from 'gatsby'

const Layout = (props) =>{
    
    let data = useStaticQuery(graphql`
    query image{
        header: file(relativePath: {eq: "logoHeader.png"}) {
         childImageSharp {
           fluid{
            ...GatsbyImageSharpFluid
           }
         }
       }
       footer: file(relativePath: {eq: "logoFooter.png"}) {
         childImageSharp {
           fluid{
            ...GatsbyImageSharpFluid
           }
         }
       }
    }`
)
    return(
    <>
      <Header image={data.header.childImageSharp.fluid} />
      {props.children}
      <Footer image={data.footer.childImageSharp.fluid} />
    </>
    )
}

export default Layout;