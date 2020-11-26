import React, { useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { useIntl, Link } from "gatsby-plugin-intl"
import { gsap } from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger"



const Workshop = ({ data }) => {

  //register Scroll Trigger to use
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => { 
     gsap.from(".workshop-2", {
     scrollTrigger:{
        trigger:".workshop-2",
        scrub:true,
        markers:true,
        start: "top center", //when the top of the trigger hits the bottom of the viewport
        end: "+=1000"         //after 50% from the start point
       },
     y: 200,
     duration:0.5
     });
  },[])
   

   //initializing the language package
   const intl =useIntl();
   //finding the language of the page, in order to fetch the content of the right language
   const lang = intl.locale==="en" ? data.en : data.tr
   
   return(
   <>
    <SEO title="Projects" />
    <Layout>
     <div className="workshops"> 
        {lang.edges.map((edge,index)=>{
         let className= index%2 ==0? "workshop-1" : "workshop-2"
          return(
         <div className={className} key={index}>
         <div className="workshop-image">
         <img sizes={edge.node.workshopImage.fluid.sizes} src={edge.node.workshopImage.fluid.src} srcSet={edge.node.workshopImage.fluid.srcset}></img>
         </div>
         <h1 className="workshop-title">{edge.node.workshopBaslik}</h1>

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
          fluid {
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
          fluid {
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
