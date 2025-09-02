import React from "react"
import { HeadFC } from "gatsby"

import Layout from "../components/layout"

const NotFoundPage = () => (
  <Layout>
    <h1>Pagina non trovata</h1>
  </Layout>
)

export const Head: HeadFC = () => (
  <>
    <title>Pagina non trovata | Lara Ercoli</title>
    <meta name="description" content="La pagina richiesta non è stata trovata" />
  </>
)

export default NotFoundPage
