import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Video from '../components/video'
import ChallengeLink from '../components/challenger-link'
import PostLink from '../components/post-link'

export default function Template ({
  data,
}) {
  console.debug(data)
  const { markdownRemark } = data
  const { allMarkdownRemark } = data
  const Posts = allMarkdownRemark.edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node}/>)
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div className="flex-none md:flex">
        <div className="md:w-4/6 md:mr-4">
          <div className={`pr-4`}>
            <h1>{frontmatter.title}</h1>
            <div className="flex devicons mb-4">
              {frontmatter.technologies.map(tech => <i key={tech} className={`devicon-${tech}-plain colored`}/>)}
            </div>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
            <h2>Video Review</h2>
            <Video youtubeId={frontmatter.youtube_id}/>
          </div>
        </div>

        <div class="md:w-2/6">
          <div className={`mb-4`}>
            <h1>Challengers</h1>
            {frontmatter.challengers.map(challenger => <ChallengeLink key={challenger} challenger={challenger}/>)}

          </div>
          <div className={`mb-4`}>
            <h1>Previous challenges</h1>
            <nav>{Posts}</nav>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        technologies
        youtube_id
        challengers
      }
    }
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
`