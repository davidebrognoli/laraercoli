import React, { useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const PrivacyPolicy = () => {
  useEffect(() => {
    const script = document.createElement("script")

    script.src =
      "https://consent.cookiebot.com/c2f6a2fe-df03-498c-971e-dba917c7838b/cd.js"
    script.async = true

    const cookiebotWrapper = document.getElementById("le-cookiebot")

    cookiebotWrapper.appendChild(script)

    return () => {
      cookiebotWrapper.removeChild(script)
    }
  }, [])

  return (
    <Layout>
      <SEO title="Avvisi" />
      <div className="le-website__content">
        <header className="le-website__header">
          <div className="le-website__header-icon">
            <svg
              className="le-website__header-icon-img"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 52 52"
            >
              <path d="M43.1989746,14.5200195c-6.039978-1.3300781-11.5100098-4.5999756-15.8099976-9.4599609l-0.6400146-0.7299805   C26.55896,4.1199951,26.2890015,4,26.0089722,4h-0.0100098c-0.2799683,0-0.5499878,0.1099854-0.7399902,0.3200684   l-0.9799805,1.0799561c-4.0900269,4.4899902-9.2200327,7.5899658-14.8499765,8.9699707L8.768981,14.5300293   c-0.4299927,0.0999756-0.75,0.4899902-0.7600098,0.9399414C7.6489859,29.5,15.9290152,39.6099854,19.5089722,43.3000488   c2.25,2.3299561,5.1300049,4.6899414,6.4800415,4.6999512c0.0099487,0,0.0099487,0,0.0099487,0   c0.0100098,0,0.0200195,0,0.0200195,0c1.5200195-0.0400391,4.4899902-2.6099854,6.5700073-4.8000488   c3.5599976-3.75,11.789978-13.9599609,11.4000244-27.7299805C43.9790039,15.0100098,43.6489868,14.6199951,43.1989746,14.5200195z    M27.2990112,36.8300781C27.1289673,36.9399414,26.9389648,37,26.7489624,37c-0.1599731,0-0.3199463-0.0400391-0.4699707-0.1199951   C25.9489746,36.6999512,25.7489624,36.3599854,25.7489624,36V16c0-0.3399658,0.1700439-0.6599121,0.460022-0.8399658   c0.2800293-0.1900635,0.6400146-0.210083,0.9500122-0.0799561l10,4.5c0.3999634,0.1799316,0.6300049,0.5899658,0.5899658,1.0200195   C37.6989746,21.0100098,36.5789795,30.75,27.2990112,36.8300781z" />
            </svg>
          </div>
          <h1 className="le-website__title">Privacy Policy</h1>
        </header>
        <div id="le-cookiebot"></div>
      </div>
    </Layout>
  )
}

export default PrivacyPolicy
