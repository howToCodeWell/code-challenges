import React from 'react'
import { Link } from 'gatsby'

const PostLink = ({ post }) => {
  console.debug(post)

  return (<>
    <div className="flex mb-2">
      <Link to={post.frontmatter.path} className={`block md:w-2/6`}>
        {post.frontmatter.date}

      </Link>
      <div className={`md:w-4/6`}>
        <div className="flex devicons">
          {post.frontmatter.technologies.map(tech => <i key={tech} className={`devicon-${tech}-plain colored pl-2`}/>)}
        </div>
      </div>
    </div>
  </>)
}
export default PostLink