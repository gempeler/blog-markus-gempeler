import React from 'react';
import Layout from '../components/layout';
import { Link, graphql, StaticQuery } from "gatsby"

const getPostsData = graphql`
{
  allFile(filter: {sourceInstanceName: {eq: "nly-posts"}}) {
    edges {
      node {
        childMarkdownRemark {
          html
          id
          frontmatter {
            title
            path
            date
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
              to={post.childMarkdownRemark.frontmatter.path}
              key={post.childMarkdownRemark.id}
              >
              <p>{post.childMarkdownRemark.frontmatter.title}</p>
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