import React from "react"
import {graphql, StaticQuery} from "gatsby"
import Header from "./header"
import Footer from "./footer"

export default function Layout({children}) {
    return (
        <StaticQuery
            query={graphql`
      query SiteData {
        site {
          siteMetadata {
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
            render={data => (
                <React.Fragment>
                    <Header menuLinks={data.site.siteMetadata.menuLinks} />
                    <div>
                        {children}
                    </div>
                    <Footer />
                </React.Fragment>
            )}
        />
    )
}
