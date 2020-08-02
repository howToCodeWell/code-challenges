import React from "react"
import { graphql, Link } from "gatsby"
import PostLink from "../components/post-link"
import CurrentChallenge from "../components/current-challenge"
import Layout from "../components/layout";

const IndexPage = ({
                       data: {
                           allMarkdownRemark: {edges},
                       },
                   }) => {
    const Posts = edges
        .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
        .map(edge => <PostLink key={edge.node.id} post={edge.node}/>);
    return (
        <Layout>
            <div className="flex-none md:flex">
                <div className="md:w-4/6 md:mr-4">
                  <div className={`pr-4`}>
                    <CurrentChallenge/>
                    <div className="text-center md:text-left m-1 pt-5 pb-5">
                        <Link className="inline-block border rounded py-1 px-3 hover:no-underline"
                           to={`how-to-submit-your-code`}>How to submit your coding challenge</Link>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/6">
                    <h1>Previous challenges</h1>
                    <nav>{Posts}</nav>
                </div>
            </div>
        </Layout>
    )
};

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
            date(formatString: "MMMM YYYY")
            path
            title,
            technologies
          }
        }
      }
    }
  }
`;
