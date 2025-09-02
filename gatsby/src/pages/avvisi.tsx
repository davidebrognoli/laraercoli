import { graphql, HeadFC } from "gatsby";
import React from "react"
import BlockContent from '@sanity/block-content-to-react'

import Layout from "../components/layout"

export const query = graphql`
  query NoticeQuery {
    allSanityNotice(sort: {date: ASC}) {
      nodes {
        id
        date
        title
        _rawDescription
      }
    }
  }
`

const Avvisi = ({data}) => {
  const { nodes } = data.allSanityNotice;

  console.log(nodes);

  return (
    <Layout>
      <div className="le-website__content">
        <header className="le-website__header">
          <div className="le-website__header-icon">
            <svg className="le-website__header-icon-img" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
              <path d="M863.232 784.384q-3.072-5.12-3.584-12.288t1.536-13.312q32.768-91.136 64.512-174.080 20.48-54.272 27.648-93.184 10.24-51.2 4.096-97.28-16.384-118.784-98.304-194.56-16.384-15.36-44.032-35.84-55.296-39.936-47.104-33.792l10.24-27.648q4.096-13.312 1.024-23.040t-14.336-13.824-20.48 0.512-14.336 17.92l-13.312 32.768q-68.608-17.408-126.976-8.192-195.584 27.648-269.312 203.776-13.312 32.768-28.672 73.728l-53.248 149.504q-5.12 12.288-17.408 18.432l-136.192 61.44q-20.48 10.24-20.48 27.648 0 10.24 7.168 16.384 5.12 5.12 16.384 9.216l252.928 90.112q10.24 4.096 13.824 8.704t2.56 14.848q-2.048 46.080 22.528 82.944t66.048 53.248 86.528 4.096q54.272-13.312 86.016-63.488l270.336 97.28q11.264 4.096 19.456 3.584t15.872-8.192 6.656-17.92q-1.024-6.144-6.144-17.408-39.936-81.92-61.44-132.096zM474.112 872.448q-30.72-8.192-48.64-33.28t-15.872-56.832l157.696 57.344q-11.264 21.504-38.912 31.232t-54.272 1.536z"></path>
            </svg>
          </div>
          <h1 className="le-website__title">Avvisi</h1>
        </header>
        <div className="le-avviso__list">
          {nodes.map(item => (
            <div className="le-avviso__item" key={item.id}>
              <div className="le-avviso__item-content">
                <p className="le-avviso__item-date">Data: <strong>{item.date}</strong></p>
                <h2 className="le-avviso__item-title">{item.title}</h2>
                <div className="le-contatti__content">
                  <BlockContent blocks={item._rawDescription || []} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const Head: HeadFC = () => (
  <>
    <title>Avvisi | Lara Ercoli</title>
    <meta name="description" content="Avvisi e comunicazioni" />
  </>
)

export default Avvisi