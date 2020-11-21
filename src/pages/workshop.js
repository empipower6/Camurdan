import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { useIntl, Link } from "gatsby-plugin-intl"
import Img from 'gatsby-image'




const Workshop = ({ data }) => {
   
   const intl =useIntl();
   const lang = intl.locale==="en" ? data.en : data.tr
   console.log(lang.edges[0].node.workshopBaslik)
   
   return(
   <>
    <SEO title="Projects" />
    <Layout>
     <div> 
        {lang.edges.map((edge,index)=>{
          return(
         <div className="workshop" key={index}>
         <h1 className="workshop-title">{edge.node.workshopBaslik}</h1>
         <div className="workshop-image">
         <Img fluid={edge.node.workshopImage.fluid} alt="we" className="backgroundImage" />
         </div>
         </div>
          )

        })}
       
     </div>
    </Layout>
   </>
   )
}

export const query = graphql `

query MyQuery {
   en: allContentfulWorkshop(filter: {node_locale: {eq: "en-US"}}) {
    edges {
      node {
        workshopBaslik
        workshopImage {
          fluid(maxHeight: 100) {
            aspectRatio
            base64
            sizes
            srcSet
            src
          }
        }
      }
    }
  }
   tr: allContentfulWorkshop(filter: {node_locale: {eq: "tr-TR"}}) {
    edges {
      node {
        workshopBaslik
        workshopImage {
          fluid(maxHeight: 100) {
            aspectRatio
            base64
            sizes
            srcSet
            src
          }
        }
      }
    }
  }
}
 `

export default Workshop
