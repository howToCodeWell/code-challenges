import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Video from '../components/video'
import ChallengeLink from '../components/challenger-link'

export default function Template ({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div className="flex-none md:flex">
        <div className="md:w-4/6 md:mr-4">
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

        <div class="md:w-2/6">
          <h1>Challengers</h1>
          {frontmatter.challengers.map(challenger => <ChallengeLink key={challenger} challenger={challenger}/>)}

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
  }
`