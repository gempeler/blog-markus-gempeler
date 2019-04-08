import React from "react"

import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./modern-normalize.css"
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `72px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <footer>
            {/* © {new Date().getFullYear()}, Markus Gempeler */}
          </footer>
        </div>
      </>
    )}
  />
)



export default Layout
