import { graphql, Link } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query YearsQuery {
    allSanityAcademicYear(sort: {fields: name, order: DESC}) {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`

const TemiEsame = ({data}) => {
  const { edges } = data.allSanityAcademicYear;

  console.log(edges);

  return (
    <Layout>
      <SEO title="Temi Esame" />
      <div className="le-website__content">
        <header className="le-website__header">
          <div className="le-website__header-icon">
            <svg className="le-website__header-icon-img" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
              <path d="M756.736 156.672v-37.888q-1.024-18.432-11.264-32.256t-27.648-19.456-34.816-0.512-29.184 19.968-11.776 36.352v33.792q0 4.096-2.56 6.656t-6.656 2.56h-60.416q-4.096 0-7.168-2.56t-3.072-6.656v-33.792q0-19.456-9.728-34.304t-27.136-20.992-35.328-1.024-29.696 19.456-11.776 32.768v37.888q0 3.072-3.072 6.144t-7.168 3.072h-61.44q-4.096 0-7.168-2.56t-3.072-6.656q1.024-33.792 0-46.080-3.072-31.744-36.864-44.032-31.744-10.24-56.32 11.264-20.48 17.408-19.456 47.104v32.768q0 3.072-3.072 6.144t-7.168 3.072h-167.936q-4.096 0-7.168 2.56t-3.072 6.656v774.144q0 4.096 3.072 6.656t7.168 2.56h872.448q4.096 0 7.168-2.56t3.072-6.656v-774.144q0-4.096-3.072-6.656t-7.168-2.56h-182.272q-4.096 0-6.656-3.072t-2.56-7.168zM333.824 921.6h-219.136q-4.096 0-7.168-2.56t-3.072-6.656v-153.6q0-4.096 3.072-6.656t7.168-2.56h219.136q3.072 0 6.144 2.56t3.072 6.656v153.6q0 4.096-3.072 6.656t-7.168 2.56h1.024zM333.824 709.632h-219.136q-4.096 0-7.168-2.56t-3.072-6.656v-161.792q0-4.096 3.072-6.656t7.168-2.56h219.136q4.096 0 6.656 2.56t2.56 6.656v161.792q0 4.096-2.56 6.656t-6.656 2.56zM333.824 489.472h-219.136q-4.096 0-7.168-2.56t-3.072-6.656v-155.648q0-3.072 3.072-6.144t7.168-3.072h219.136q4.096 0 6.656 2.56t2.56 6.656v155.648q0 4.096-2.56 6.656t-6.656 2.56zM625.664 921.6h-232.448q-4.096 0-6.656-2.56t-2.56-6.656v-152.576q0-4.096 2.56-7.168t6.656-3.072h232.448q3.072 0 6.144 3.072t3.072 7.168v152.576q0 4.096-3.072 6.656t-7.168 2.56h1.024zM635.904 704.512q-1.024 3.072-3.584 4.608t-6.656 1.536h-232.448q-4.096 0-6.656-3.072t-2.56-7.168v-161.792q0-4.096 1.536-6.656t3.584-3.584h234.496q7.168 0 9.728 2.048t2.56 9.216v164.864zM635.904 484.352q0 2.048-3.072 3.584t-7.168 1.536h-232.448q-4.096 0-6.656-2.56t-2.56-6.656v-155.648q0-4.096 1.536-7.168t3.584-3.072h234.496q7.168 0 9.728 2.56t2.56 9.728v157.696zM685.056 529.408h224.256q4.096 0 6.656 2.56t2.56 6.656v161.792q0 4.096-2.56 7.168t-6.656 3.072h-224.256q-4.096 0-7.168-3.072t-3.072-7.168v-161.792q0-4.096 3.072-6.656t7.168-2.56zM909.312 921.6h-224.256q-4.096 0-7.168-2.56t-3.072-6.656v-152.576q0-4.096 3.072-7.168t7.168-3.072h224.256q4.096 0 6.656 3.072t2.56 7.168v152.576q0 4.096-2.56 6.656t-6.656 2.56zM909.312 489.472h-224.256q-4.096 0-7.168-2.56t-3.072-6.656v-155.648q0-3.072 3.072-6.144t7.168-3.072h224.256q4.096 0 6.656 3.072t2.56 6.144v155.648q0 4.096-2.56 6.656t-6.656 2.56z"></path>
            </svg>
          </div>
          <h1 className="le-website__title">Temi esame</h1>
        </header>
        <div className="le-temiesame__grid">
          {edges.map(y => {
            const { node } = y;
            const url = `/temiesame/${node.name}`;
            return (
              <Link to={url} className="le-temiesame__grid-item" key={node.id}>
                <svg className="le-temiesame__grid-item-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                  <path d="M847.872 63.488h-671.744q-23.552 0-39.936 16.896t-16.384 39.424v784.384q0 23.552 16.384 39.424t39.936 15.872h671.744q23.552 0 39.936-16.384t16.384-38.912v-784.384q0-22.528-16.384-39.424t-39.936-15.872v-1.024zM655.36 155.648h161.792v56.32h-161.792v-56.32zM203.776 155.648h162.816v56.32h-162.816v-56.32zM839.68 898.048h-655.36v-601.088h655.36v601.088zM274.432 453.632h479.232q12.288 0 20.48-8.704t8.192-20.48-8.192-20.48-20.48-8.704h-479.232q-11.264 0-19.968 8.704t-8.704 20.48 8.704 20.48 19.968 8.704zM274.432 572.416h479.232q12.288 0 20.48-8.192t8.192-20.48-8.192-20.48-20.48-8.192h-479.232q-11.264 0-19.968 8.704t-8.704 20.48 8.704 19.968 19.968 8.192zM274.432 692.224h479.232q12.288 0 20.48-8.704t8.192-20.48-8.192-19.968-20.48-8.192h-479.232q-11.264 0-19.968 8.192t-8.704 20.48 8.704 20.48 19.968 8.192zM274.432 812.032h479.232q12.288 0 20.48-8.704t8.192-20.48-8.192-20.48-20.48-8.704h-479.232q-11.264 0-19.968 8.704t-8.704 20.48 8.704 20.48 19.968 8.704z"></path>
                </svg>
                <p className="le-temiesame__grid-item-text">{node.name}</p>
                <div className="le-temiesame__grid-item-ribbon"></div>
              </Link>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default TemiEsame
