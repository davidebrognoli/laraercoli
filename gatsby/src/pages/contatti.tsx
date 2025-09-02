import { graphql, HeadFC } from "gatsby"
import React from "react"

import BlockContent from '@sanity/block-content-to-react'

import Layout from "../components/layout"

export const query = graphql`
  query ContattiQuery {
    page: sanityPage(title: {eq: "Contatti"}) {
      title
      _rawBody
    }
  }
`

const Contatti = ({data}) => {
  console.log(data.page);

  return (
    <Layout>
      <div className="le-website__content">
        <header className="le-contatti__header">
          <div className="le-contatti__header-icon">
          <svg className="le-contatti__header-icon-img" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
            <path d="M492.544 937.984q-39.936-53.248-57.344-77.824-106.496-151.552-166.912-279.552-20.48-43.008-31.744-73.728-15.36-40.96-22.528-76.8-29.696-150.528 70.656-263.168 96.256-108.544 244.736-102.4 66.56 3.072 125.952 34.816t100.352 86.016 54.272 119.808q16.384 79.872-9.216 160.768-43.008 137.216-146.432 294.912-26.624 40.96-66.56 97.28-92.16 130.048-68.608 97.28l-4.096 4.096q-1.024 2.048-8.192-4.096t-14.336-17.408zM661.504 372.736q1.024-37.888-16.896-72.192t-50.176-56.32-70.144-24.064q-43.008-3.072-79.36 15.36t-57.856 52.224-23.552 77.824q-2.048 37.888 16.384 72.192t51.2 56.32 71.68 23.040q41.984 2.048 77.312-15.872t56.832-51.712 23.552-76.8h1.024z"></path>
          </svg>
          </div>
          <h1 className="le-contatti__title">Contatti</h1>
        </header>
        <div className="le-contatti__content">
          <BlockContent blocks={data.page._rawBody || []} />
        </div>
      </div>
    </Layout>
  )
}

export const Head: HeadFC = () => (
  <>
    <title>Contatti | Lara Ercoli</title>
    <meta name="description" content="Informazioni di contatto" />
  </>
)

export default Contatti
