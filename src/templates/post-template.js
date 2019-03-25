import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout';


const PostTemplate = ({data}) => {
  console.log(data);
  const { frontmatter, html } = data.markdownRemark 
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
  markdownRemark(frontmatter: { path: { eq: $path } }) {
    html
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      title
    }
  }
}
`

export default PostTemplate