import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Current coding challenge</h1>

    <p>TODO - Add content</p>

    <h2>Previous coding challenges</h2>
    <ul>
        <li><Link to="/2019/december">December 2019</Link></li>
        <li><Link to="/2019/november">November 2019</Link></li>
    </ul>
  </Layout>
)

export default IndexPage
