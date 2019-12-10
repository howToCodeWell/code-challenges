import React from "react"
import { graphql } from "gatsby"
import PostLink from "../components/post-link"
import CurrentChallenge from "../components/current-challenge"
import Layout from "../components/layout";

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
      <div class="flex-non sm:flex ">
        <div class="flex-none sm:flex-1 md:flex-auto  m-2">
          <h1>Current challenge</h1>
          <CurrentChallenge/>
          <div class="text-center md:text-left m-1 pt-5 pb-5" >
          <a class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 no-underline" href={"https://howtocodewell.net/discord"} >Submit your challenge</a>
              </div>
            </div>
        <div class="flex-none sm:flex-1 md:flex-auto  m-2">
          <h1>Previous challenges</h1>
          <div>{Posts}</div>
        </div>
      </div>
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