import { graphql, useStaticQuery } from "gatsby"
import React from "react"

import BlockContent from '@sanity/block-content-to-react'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Social from "../components/social"

export const query = graphql`
  query HomeQuery {
    page: sanityPage(title: {eq: "Homepage"}) {
      id
      _rawBody
    }
    image: file(relativePath: {eq: "lara.jpg"}) {
      id
      childImageSharp {
        fluid {
          src
        }
      }
    }
  }
`

const IndexPage = ({data}) => {

  const { image, page } = data;

  return (
    <Layout>
      <SEO title="Lara Ercoli" />
      <div className="le-home">
        <figure className="le-home__img-container">
          <img className="le-home__img" src={image.childImageSharp.fluid.src} alt="Lara Ercoli" />
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

export default IndexPage
