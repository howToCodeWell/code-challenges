import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Current coding challenge</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

    <h2>Previous Coding Challeges</h2>
    <ul>
        <li><Link to="/2019/december">December 2019</Link></li>
        <li><Link to="/2019/november">November 2019</Link></li>
    </ul>
  </Layout>
)

export default IndexPage
