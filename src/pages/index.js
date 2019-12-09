import React from "react"
import { graphql } from "gatsby"
import PostLink from "../components/post-link"
import CurrentChallenge from "../components/current-challenge"
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  return (
    <Layout>
      <h1>Current challenge</h1>
    <CurrentChallenge/>
        <h1>Previous challenges</h1>
    <div>{Posts}</div>
    </Layout>
  )
}

export default IndexPage
export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      skip: 1
      ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "DD/MM/YYYY")
            path
            title
          }
        }
      }
    }
  }
`