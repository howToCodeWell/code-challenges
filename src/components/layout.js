/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {useStaticQuery, graphql} from "gatsby"
import HeaderMenu from "howtocodewell-header-menu";

import "./layout.css"

const Layout = ({children}) => {
    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

    return (
        <>
            <HeaderMenu/>
            <div className="container mx-auto px-4">
                <main>{children}</main>
                <footer className="flex justify-between border-solid border-t-2 mt-8 pt-4 border-gray-400">
                    <div className="mr-2">
                        <a href="https://github.com/howToCodeWell/code-challenges" target={'_blank'}
                           rel="noopener noreferrer">Edit</a>
                    </div>
                    <div className="m2">
                        <a href="https://howtocodewell.net">How To Code Well</a>
                    </div>
                </footer>
            </div>
        </>
    )
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout
