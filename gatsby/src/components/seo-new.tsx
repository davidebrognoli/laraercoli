/**
 * SEO component using Gatsby 5's built-in Head API
 * This replaces react-helmet with Gatsby's native solution
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

interface SEOProps {
  title: string
  description?: string
  lang?: string
  meta?: Array<{
    name?: string
    property?: string
    content: string
  }>
}

function SEO({ description, lang = "it", meta = [], title }: SEOProps) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <>
      <title>{title} | {defaultTitle}</title>
      <html lang={lang} />
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata?.author || ""} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      {meta.map((item, index) => (
        <meta key={index} {...item} />
      ))}
    </>
  )
}

export default SEO
