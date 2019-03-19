import React from 'react';
import Layout from '../components/layout';
import { Link, graphql, StaticQuery } from "gatsby"

const getPostsData = graphql`
{
  allFile(filter: {sourceInstanceName: {eq: "posts"}}) {
    edges {
      node {
        childBlogPost {
          html
          id
          frontmatter {
            title
            tags
            author
            date
            path
          }
        }
      }
    }
  }
}`
  

const Blog = () => {
  return(
    <Layout>
    <h1>Blog</h1>
    <StaticQuery
      query={getPostsData}
      render={ data => {
        return(
          <div>
          {data.allFile.edges.map( ({node : post}) => {
            return(
              <Link
              to={post.childBlogPost.frontmatter.path}
              key={post.childBlogPost.id}
              >
              <p>{post.childBlogPost.frontmatter.title}</p>
              </Link>
            )
          })}
          </div>
        )
      }}  
    ></StaticQuery>
    </Layout>
  )
}

export default Blog