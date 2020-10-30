import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/layout';
import SEO from '../components/seo';

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    examinations: allSanityExamination(filter: {year: {id: {eq: $id}}}) {
      edges {
        node {
          id
          title
          file {
            asset {
              url
            }
          }
        }
      }
    },
    year: sanityAcademicYear(id: {eq: $id}) {
      name
    }
  }
`

const AcademicYear = ({data}) => {
  const { edges } = data.examinations;  
  const seoTitle = `Temi esame - ${data.year.name}`;

  return (
    <Layout>
      <SEO title={seoTitle} />
      <div className="le-website__content">
        <header className="le-website__header">
          <div className="le-website__header-icon">
            <svg className="le-website__header-icon-img" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
              <path d="M756.736 156.672v-37.888q-1.024-18.432-11.264-32.256t-27.648-19.456-34.816-0.512-29.184 19.968-11.776 36.352v33.792q0 4.096-2.56 6.656t-6.656 2.56h-60.416q-4.096 0-7.168-2.56t-3.072-6.656v-33.792q0-19.456-9.728-34.304t-27.136-20.992-35.328-1.024-29.696 19.456-11.776 32.768v37.888q0 3.072-3.072 6.144t-7.168 3.072h-61.44q-4.096 0-7.168-2.56t-3.072-6.656q1.024-33.792 0-46.080-3.072-31.744-36.864-44.032-31.744-10.24-56.32 11.264-20.48 17.408-19.456 47.104v32.768q0 3.072-3.072 6.144t-7.168 3.072h-167.936q-4.096 0-7.168 2.56t-3.072 6.656v774.144q0 4.096 3.072 6.656t7.168 2.56h872.448q4.096 0 7.168-2.56t3.072-6.656v-774.144q0-4.096-3.072-6.656t-7.168-2.56h-182.272q-4.096 0-6.656-3.072t-2.56-7.168zM333.824 921.6h-219.136q-4.096 0-7.168-2.56t-3.072-6.656v-153.6q0-4.096 3.072-6.656t7.168-2.56h219.136q3.072 0 6.144 2.56t3.072 6.656v153.6q0 4.096-3.072 6.656t-7.168 2.56h1.024zM333.824 709.632h-219.136q-4.096 0-7.168-2.56t-3.072-6.656v-161.792q0-4.096 3.072-6.656t7.168-2.56h219.136q4.096 0 6.656 2.56t2.56 6.656v161.792q0 4.096-2.56 6.656t-6.656 2.56zM333.824 489.472h-219.136q-4.096 0-7.168-2.56t-3.072-6.656v-155.648q0-3.072 3.072-6.144t7.168-3.072h219.136q4.096 0 6.656 2.56t2.56 6.656v155.648q0 4.096-2.56 6.656t-6.656 2.56zM625.664 921.6h-232.448q-4.096 0-6.656-2.56t-2.56-6.656v-152.576q0-4.096 2.56-7.168t6.656-3.072h232.448q3.072 0 6.144 3.072t3.072 7.168v152.576q0 4.096-3.072 6.656t-7.168 2.56h1.024zM635.904 704.512q-1.024 3.072-3.584 4.608t-6.656 1.536h-232.448q-4.096 0-6.656-3.072t-2.56-7.168v-161.792q0-4.096 1.536-6.656t3.584-3.584h234.496q7.168 0 9.728 2.048t2.56 9.216v164.864zM635.904 484.352q0 2.048-3.072 3.584t-7.168 1.536h-232.448q-4.096 0-6.656-2.56t-2.56-6.656v-155.648q0-4.096 1.536-7.168t3.584-3.072h234.496q7.168 0 9.728 2.56t2.56 9.728v157.696zM685.056 529.408h224.256q4.096 0 6.656 2.56t2.56 6.656v161.792q0 4.096-2.56 7.168t-6.656 3.072h-224.256q-4.096 0-7.168-3.072t-3.072-7.168v-161.792q0-4.096 3.072-6.656t7.168-2.56zM909.312 921.6h-224.256q-4.096 0-7.168-2.56t-3.072-6.656v-152.576q0-4.096 3.072-7.168t7.168-3.072h224.256q4.096 0 6.656 3.072t2.56 7.168v152.576q0 4.096-2.56 6.656t-6.656 2.56zM909.312 489.472h-224.256q-4.096 0-7.168-2.56t-3.072-6.656v-155.648q0-3.072 3.072-6.144t7.168-3.072h224.256q4.096 0 6.656 3.072t2.56 6.144v155.648q0 4.096-2.56 6.656t-6.656 2.56z"></path>
            </svg>
          </div>
          <div>
            <h1 className="le-website__title">Temi esame{}</h1>
            <h2 className="le-website__subtitle">Anno accademico {data.year.name}</h2>
          </div>
        </header>
        {edges.map(item => (
          <div className="le-materiale__item" key={item.node.id}>
            <svg className="le-materiale__item-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
              <path d="M862.208 0h-681.984q-33.792 0-57.344 24.064t-23.552 57.856v860.16q0 33.792 23.552 57.856t57.344 24.064h662.528q33.792 0 57.856-24.064t24.064-57.856v-879.616q0-25.6-18.432-44.032t-44.032-18.432zM855.040 569.344v372.736q0 5.12-3.584 8.704t-8.704 3.584h-662.528q-4.096 0-7.68-3.584t-3.584-8.704v-860.16q0-5.12 3.584-8.704t7.68-3.584h500.736q11.264 0 25.088 6.656t20.992 14.848l107.52 124.928q8.192 9.216 14.336 25.6t6.144 27.648v300.032zM758.784 568.32q-15.36-15.36-67.584-15.36h-4.096q-33.792 0-75.776 5.12-25.6-14.336-36.864-24.576-44.032-41.984-67.584-104.448l3.072-10.24q5.12-21.504 7.168-83.968v-4.096q6.144-22.528 4.096-34.816 0-4.096-2.048-8.192l-3.072-7.168q-9.216-18.432-26.624-18.432h-7.168q-11.264 0-20.48 5.632t-11.264 14.848q-7.168 24.576-1.024 66.56 4.096 34.816 19.456 93.184l-4.096 11.264q-13.312 31.744-45.056 92.16l-1.024 3.072q-22.528 44.032-40.96 76.8l-40.96 21.504q-33.792 20.48-54.784 41.472t-24.064 38.4 8.192 24.576l12.288 6.144q8.192 4.096 17.408 4.096 23.552 0 52.224-30.72t66.56-96.256q91.136-29.696 181.248-43.008 32.768 18.432 69.632 30.208t62.464 11.776q9.216 0 16.384-2.048 9.216-2.048 16.384-11.264 2.048-4.096 5.12-17.408v-23.552q-2.048-6.144-7.168-11.264zM291.84 734.208q6.144-13.312 20.48-31.744 17.408-21.504 39.936-38.912l5.12-4.096q-39.936 60.416-65.536 74.752zM487.424 286.72q0-3.072 1.024-5.12 4.096 6.144 9.216 16.896t5.12 33.28v3.072l-10.24 41.984q-8.192-34.816-8.192-60.416 0-15.36 3.072-29.696zM431.104 603.136q12.288-21.504 20.48-36.864 21.504-40.96 36.864-81.92 25.6 46.080 62.464 76.8l8.192 6.144q-72.704 14.336-128 35.84zM747.52 603.136q-3.072 1.024-9.216 1.024-26.624 0-75.776-19.456 49.152-4.096 69.632 3.072 11.264 3.072 17.408 7.168l3.072 2.048q-3.072 5.12-5.12 6.144z"></path>
            </svg>
            <div className="le-materiale__item-content">
              <h2 className="le-materiale__item-title">{item.node.title}</h2>
              {item.node.file.asset && <a className="le-materiale__item-link" href={item.node.file.asset.url}>Download</a>}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default AcademicYear
