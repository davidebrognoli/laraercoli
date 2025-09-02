/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from "react"

// Optimize fonts loading to prevent render blocking
export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  setHeadComponents([
    // DNS prefetch for external domains - highest priority
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
    // Preconnect to Google Fonts domains
    <link
      key="preconnect-fonts"
      rel="preconnect"
      href="https://fonts.googleapis.com"
    />,
    <link
      key="preconnect-gstatic"
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="anonymous"
    />,
    // Preload critical font files
    <link
      key="preload-lato-400"
      rel="preload"
      href="https://fonts.gstatic.com/s/lato/v24/S6uyw4BMUTPHjx4wXiWtFCc.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="preload-lora-700"
      rel="preload"
      href="https://fonts.gstatic.com/s/lora/v36/0QI6MX1D_JOuGQbT0gvTJPa787weuxJBkqsxzgXRucW4.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
  ])

  // Add async font loading script after body
  setPostBodyComponents([
    <script
      key="async-font-loader"
      dangerouslySetInnerHTML={{
        __html: `
          // Async Google Fonts loader to prevent render blocking
          (function() {
            if ('fonts' in document) {
              // Modern browsers with Font Loading API
              const fontFaces = [
                new FontFace('Lato', 'url(https://fonts.gstatic.com/s/lato/v24/S6uyw4BMUTPHjx4wXiWtFCc.woff2)', {
                  weight: '400',
                  style: 'normal',
                  display: 'swap'
                }),
                new FontFace('Lora', 'url(https://fonts.gstatic.com/s/lora/v36/0QI6MX1D_JOuGQbT0gvTJPa787weuxJBkqsxzgXRucW4.woff2)', {
                  weight: '700',
                  style: 'normal',
                  display: 'swap'
                })
              ];
              
              fontFaces.forEach(function(fontFace) {
                document.fonts.add(fontFace);
                fontFace.load();
              });
            } else {
              // Fallback for older browsers
              var link = document.createElement('link');
              link.rel = 'stylesheet';
              link.href = 'https://fonts.googleapis.com/css?family=Lato:300,400,500,700|Lora:700&display=swap';
              link.media = 'print';
              link.onload = function() { this.media = 'all'; };
              document.head.appendChild(link);
            }
          })();
        `,
      }}
    />,
  ])
}
