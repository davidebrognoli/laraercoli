import { graphql, useStaticQuery } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {

  const data = useStaticQuery(graphql`
    query {
      lara: file(relativePath: {eq: "lara.jpg"}) {
        id
        childImageSharp {
          fluid {
            src
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Lara Ercoli" />
      <div className="le-home">
        <figure className="le-home__img-container">
          <img className="le-home__img" src={data.lara.childImageSharp.fluid.src} alt="Lara Ercoli" />
        </figure>
        <div className="le-home__content">
          <h1 className="le-home__title">Lara Ercoli</h1>
          <h2 className="le-home__subtitle">Docente di Matematica</h2>
          <ul className="le-home__social">
            <a href="mailto:lara.ercoli@unibs.it" className="le-home__social-item" target="_blank">
              <svg className="le-home__social-icon"  version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                <path d="M504.832 595.968q-236.544-116.736-417.792-204.8-9.216-4.096-15.872 0t-6.656 14.336v405.504q0 11.264 7.168 18.432t18.432 7.168h843.776q10.24 0 17.92-7.168t7.68-17.408v-405.504q0-10.24-6.656-14.336t-15.872 0q-215.040 105.472-412.672 203.776-10.24 4.096-19.456 0zM183.296 360.448q245.76 120.832 322.56 158.72 8.192 3.072 15.36 0l432.128-212.992q6.144-3.072 6.144-11.264l1.024-82.944q0-10.24-7.68-17.92t-17.92-7.68h-845.824q-10.24 0-17.408 7.68t-7.168 17.92v83.968q0 2.048 2.56 5.632t4.608 4.608z"></path>
              </svg>
            </a>
            <a href="http://www.linkedin.com/in/laraercoli" className="le-home__social-item" target="_blank">
              <svg className="le-home__social-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                <path d="M771.072 331.776q-76.8 0-131.072 36.864-36.864 23.552-66.56 68.608v2.048h-1.024l1.024-2.048v-90.112h-219.136q1.024 36.864 1.024 340.992l-1.024 296.96h219.136v-356.352q0-34.816 7.168-52.224 13.312-32.768 39.936-53.248 30.72-23.552 72.704-23.552 57.344-1.024 86.016 39.936 25.6 35.84 25.6 103.424v342.016h219.136v-366.592q0-94.208-33.792-160.768-30.72-62.464-89.088-95.232-56.32-30.72-130.048-30.72zM123.904 38.912q-55.296 0-89.6 31.744t-34.304 78.848 33.792 78.848 87.040 31.744h2.048q56.32 0 90.112-31.744t33.28-79.36-33.792-78.848-88.576-31.232zM13.312 347.136h219.136v637.952h-219.136v-637.952z"></path>
              </svg>
            </a>
          </ul>
          <p className="le-home__description">	
            Laureata in Matematica all’Università Cattolica di Brescia, lavoro come insegnante di matematica nella scuola secondaria di secondo grado. 
            Dal 2010 collaboro con l’Università degli studi di Brescia in qualità di esercitatrice al corso di Algebra e Geometria.
          </p>
          <p className="le-home__description">
            Ho cominciato la mia esperienza lavorativa come supplente di matematica in alcune scuole statali della Provincia di Brescia. Dopo un periodo di tirocinio ho ottenuto la mia prima cattedra di Matematica presso l’istituto Canossa di Brescia dove ho insegnato per dieci anni.
            Dal 2018 al 2020 ho insegnato matematica come docente di ruolo presso l’IISS Primo Levi di Sarezzo.
            Attualmente sono docente di ruolo presso l’IIS Tartaglia- Olivieri di Brescia.
            Ho un contratto di collaborazione didattica presso la facoltà di Ingegneria dell’Università degli Studi di Brescia per le esercitazioni al corso di Algebra e Geometria.
            Svolgo l’attività di cultore della materia per gli insegnamenti di Fondamenti della Matematica, Geometria, Geometria superiore e Logica matematica presso l’Università Cattolica di Brescia.
            Nell’a.a. 2014/ 15 sono stata docente di Laboratorio di didattica della matematica per il corso di laurea in Scienze della Formazione presso la sede di Milano dell’Università cattolica de Sacro Cuore.
          </p>
          <p className="le-home__description"> 	
            Ho conseguito il diploma di licenza socio-psico-pedagogica nel 2003 presso il Liceo Camillo Golgi di Breno con la valutazione di 100/100.
            Nell’ottobre del 2008 ho conseguito la laurea magistrale in Matematica con votazione 110/110 e lode presso la facoltà di Scienze matematiche, fisiche e naturali dell’Università Cattolica di Brescia.
            Il titolo della mia tesi è Metodi Geometrici in Crittografia.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
