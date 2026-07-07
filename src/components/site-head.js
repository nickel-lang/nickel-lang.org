import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export function SiteHead() {
    const data = useStaticQuery(graphql`
        query SiteMeta {
            site {
                siteMetadata {
                    title
                    description
                    keywords
                }
            }
        }
    `)
    const { title, description, keywords } = data.site.siteMetadata
    return (
        <>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
        </>
    )
}
