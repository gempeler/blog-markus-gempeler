import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout';
import styles from './post-template.module.css';


const PostTemplate = ({data}) => {
  console.log(data);
  const { frontmatter, html } = data.markdownRemark 
  return (
    <Layout >
        <div className={styles.postcontainer}>
        <h1>{frontmatter.title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        /> 
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
query($path: String!) {
  markdownRemark(fields: { slug: { eq: $path } }) {
    html
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      title
    }
  }
}
`

export default PostTemplate