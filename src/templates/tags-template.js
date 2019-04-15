import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"

const Tags = ({ pageContext, data }) => {
  return (
    <div>
      <Layout>Tags Template</Layout>
    </div>
  )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
            spoiler
          }
        }
      }
    }
  }
`
