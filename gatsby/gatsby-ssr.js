/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from "react"

// Preload critical fonts to improve LCP
export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    // DNS prefetch for external domains
    <link
      key="dns-prefetch-fonts"
      rel="dns-prefetch"
      href="//fonts.googleapis.com"
    />,
    <link
      key="dns-prefetch-gstatic"
      rel="dns-prefetch"
      href="//fonts.gstatic.com"
    />,
    // Preload critical font files (Lato Regular 400 - most commonly used)
    <link
      key="preload-lato-400"
      rel="preload"
      href="https://fonts.gstatic.com/s/lato/v24/S6uyw4BMUTPHjx4wXiWtFCc.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    // Preload Lora Bold 700 for headings
    <link
      key="preload-lora-700"
      rel="preload"
      href="https://fonts.gstatic.com/s/lora/v36/0QI6MX1D_JOuGQbT0gvTJPa787weuxJBkqsxzgXRucW4.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
  ])
}
