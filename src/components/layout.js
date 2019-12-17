/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import HeaderMenu from "howtocodewell-header-menu";

import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    <HeaderMenu/>
      <div className={'mr-auto ml-auto w-1/2 sm:w-auto md:w-full lg:w-32 xl:w-3/4 '}>
        <main>{children}</main>
        <footer className="text-right">

          <a href="https://howtocodewell.net">How To Code Well</a>
          {` `}
          {new Date().getFullYear()}
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
