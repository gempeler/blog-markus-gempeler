import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout';


const PostTemplate = ({data}) => {
  const { blogPost } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = blogPost 
  console.log(data)
  return (
    <Layout >
        <div >
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        /> 
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    blogPost(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`

export default PostTemplate