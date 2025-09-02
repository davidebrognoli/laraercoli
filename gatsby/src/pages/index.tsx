import { graphql, HeadFC } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"

import BlockContent from '@sanity/block-content-to-react'

import Layout from "../components/layout"
import Social from "../components/social"

export const query = graphql`
  query HomeQuery {
    page: sanityPage(title: {eq: "Homepage"}) {
      id
      _rawBody
    }
    image: file(relativePath: {eq: "lara.jpg"}) {
      childImageSharp {
        gatsbyImageData(
          width: 400
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`

const IndexPage = ({data}) => {
  const { page, image } = data;
  const gatsbyImage = getImage(image);

  return (
    <Layout>
      <div className="le-home">
        <figure className="le-home__img-container">
          {gatsbyImage && (
            <GatsbyImage 
              image={gatsbyImage} 
              alt="Lara Ercoli" 
              className="le-home__img"
            />
          )}
        </figure>
        <div className="le-home__content">
          <h1 className="le-home__title">Lara Ercoli</h1>
          <h2 className="le-home__subtitle">Docente di Matematica</h2>
          <Social />
          <div className="le-home__text">
            <BlockContent blocks={data.page._rawBody || []} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head: HeadFC = () => (
  <>
    <title>Lara Ercoli</title>
    <meta name="description" content="Sito web di Lara Ercoli" />
  </>
)

export default IndexPage
