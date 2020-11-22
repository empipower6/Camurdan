import React, { useEffect } from "react"
import SEO from "../components/seo"
import { gsap } from "gsap";
import { graphql } from 'gatsby'
import ScrollTrigger from "gsap/ScrollTrigger"
import Img from 'gatsby-image'
import Layout from '../components/layout'
import { useIntl, Link } from "gatsby-plugin-intl"

const About = ({ data }) =>{

   const intl =useIntl();
   gsap.registerPlugin(ScrollTrigger);
   console.log(gsap);

   useEffect(() => { 
      gsap.from(".funda", {
      scrollTrigger:{
         trigger:".funda",
         scrub:1,
         start: "top bottom", //when the top of the trigger hits the bottom of the viewport
         end: "+=800"         //after 50% from the start point
        },
      x: 200,
      duration:0.5
      });
  
      gsap.from(".tugba", {
        scrollTrigger:{
           trigger:".tugba",
           scrub:1,
           markers:true,
           start:"top bottom",
           end:"+=1000"
          },
        x: -300,
        duration:0.5
        });
   }, [])

   console.log(process.env.NODE_ENV)
   return(
   <>
      <SEO title="Home" />
      {}
      <Layout>
            <div className="about-section">
               <div className="about-text">
                  <Img fluid={data.background.childImageSharp.fluid} alt="we" className="backgroundImage" />
                  <p>  
                  {intl.formatMessage({ id: "aboutMain" })}
                 </p>
               </div>
      
            </div>
   
         <div className="about-people-section">
            <div className="people-text">
               <div className="tugba">

                  <div className="tugbaPic"><Img fluid={data.tugbaPic.childImageSharp.fluid} alt="Tugba Picture" /> </div>
                  <h1 className="name"> tuğba ülker akan </h1>
                  <div className="tugbaBall"><Img fluid={data.firstBall.childImageSharp.fluid} alt="we" /> </div>
                  <p className="bio">2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pellentesque ac sapien et tempus. Ut et fringilla erat. Nulla volutpat efficitur eros, sed interdum risus tristique vel. Nulla venenatis porttitor varius. Donec accumsan pharetra ultricies. Sed lorem nibh, maximus id venenatis in, porttitor sit amet quam. In vitae efficitur purus. Sed a tortor lorem. Pellentesque placerat elementum vehicula. Vestibulum lorem purus, tincidunt eu consequat accumsan, viverra non massa. Vivamus blandit, tellus sed tempor malesuada, metus dui mattis ligula, vitae accumsan nulla diam vel odio. Cras vulputate id dui sed suscipit. Suspendisse lobortis mauris quis magna dictum aliquet. Nullam at elit ut tellus tempor imperdiet in eget nisi. Proin facilisis sem ut est scelerisque</p>
               
               </div>
               <div className="funda">
                  
                  <div className="fundaPic"><Img fluid={data.fundaPic.childImageSharp.fluid} alt="Funda Picture" /> </div>
                  <h1 className="name"> funda özkan </h1>
                  <div className="fundaBall"><Img fluid={data.secondBall.childImageSharp.fluid} alt="we" /> </div>
                  <p className="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pellentesque ac sapien et tempus. Ut et fringilla erat. Nulla volutpat efficitur eros, sed interdum risus tristique vel. Nulla venenatis porttitor varius. Donec accumsan pharetra ultricies. Sed lorem nibh, maximus id venenatis in, porttitor sit amet quam. In vitae efficitur purus. Sed a tortor lorem. Pellentesque placerat elementum vehicula. Vestibulum lorem purus, tincidunt eu consequat accumsan, viverra non massa. Vivamus blandit, tellus sed tempor malesuada, metus dui mattis ligula, vitae accumsan nulla diam vel odio. Cras vulputate id dui sed suscipit. Suspendisse lobortis mauris quis magna dictum aliquet. Nullam at elit ut tellus tempor imperdiet in eget nisi. Proin facilisis sem ut est scelerisque</p>
   
               </div>
            </div>
         </div>
    </Layout>
     </>)
}


export const query = graphql`

  {
     background: file(relativePath: {eq: "backgroundAbout.png"}) {
      childImageSharp {
        fluid{
         ...GatsbyImageSharpFluid
        }
      }
    }
    firstBall: file(relativePath: {eq: "topAbout1.png"}) {
      childImageSharp {
        fluid{
         ...GatsbyImageSharpFluid
        }
      }
    }
    secondBall: file(relativePath: {eq: "topAbout2.png"}) {
      childImageSharp {
        fluid{
         ...GatsbyImageSharpFluid
        }
      }
    }
    fundaPic: file(relativePath: {eq: "funda.png"}) {
      childImageSharp {
        fluid{
         ...GatsbyImageSharpFluid
        }
      }
    }
    tugbaPic: file(relativePath: {eq: "tugba.png"}) {
      childImageSharp {
        fluid{
         ...GatsbyImageSharpFluid
        }
      }
    }
    
  }



`;


export default About
