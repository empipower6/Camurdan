
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Image = ({ fileName, alt, style }) => {
  const { allImageSharp } = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          fixed(width: 125, height: 125) {
            originalName
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  
  const fixed = allImageSharp.nodes.find(n => n.fixed.originalName === fileName)

  return (
      <Img fixed={fixed} alt={alt} style={style} />
  )
}

export default Image;