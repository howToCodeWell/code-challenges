/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {useStaticQuery, graphql} from "gatsby"
import HeaderMenu from "@howtocodewell/header-menu";
import FooterMenu from "@howtocodewell/footer-menu";

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
            <div className='page-container'>
                <HeaderMenu/>
                <div className="main-container container mx-auto px-4">
                    <main>{children}</main>
                </div>
                <div className='footer'>
                    <FooterMenu/>
                    <footer className=" pt-2">
                        <div className="container mx-auto px-4">
                            <div className='flex justify-between'>
                                <div className="mr-2">
                                    <a href="https://github.com/howToCodeWell/code-challenges" target={'_blank'}
                                       rel="noopener noreferrer">Edit</a>
                                </div>
                                <div className="m2">
                                    <a href="https://howtocodewell.net">How To Code Well</a>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    )
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout
