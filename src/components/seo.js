import React from "react"
import {graphql, useStaticQuery} from "gatsby"

/**
 * Document head (title and meta tags) for a page, built from the site metadata. Meant to be
 * rendered from the `Head` export of a page, as in `export const Head = () => <Seo />`.
 */
export default function Seo({children}) {
    const {site: {siteMetadata}} = useStaticQuery(graphql`
      query SeoData {
        site {
          siteMetadata {
            title
            description
            keywords
          }
        }
      }
    `)

    return (
        <>
            <title>{siteMetadata.title}</title>
            <meta name="description" content={siteMetadata.description} />
            <meta name="keywords" content={siteMetadata.keywords} />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap" />
            {children}
        </>
    )
}
