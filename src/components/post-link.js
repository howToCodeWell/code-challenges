import React from "react"
import { Link } from "gatsby"
const PostLink = ({ post }) => (
  <div>
    <Link to={post.frontmatter.path}>
      {post.frontmatter.title}
    </Link>
  </div>
)
export default PostLink