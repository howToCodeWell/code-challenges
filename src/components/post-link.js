import React from "react"
import { Link } from "gatsby"
const PostLink = ({ post }) => (
  <div className="flex">
    <Link to={post.frontmatter.path}>
      {post.frontmatter.date}

    </Link>
      <div className="flex devicons ml-2">
          <i className="devicon-javascript-plain colored"></i>
          <i className="devicon-css3-plain-wordmark colored"></i>
          <i className="devicon-html5-plain-wordmark colored"></i>
      </div>
  </div>
)
export default PostLink