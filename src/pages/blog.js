import React from 'react';
import Layout from '../components/layout';
import { Link, graphql, StaticQuery } from "gatsby"
import styles from './blog.module.css';

const getPostsData = graphql`
  {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          id
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
  

const Blog = () => {
  return(
    <Layout>
    <StaticQuery
      query={getPostsData}
      render={ data => {
        // aus dem Titel den Pfad machen, alles klein und am Anfang und Ende /
        return(
          <div className= {styles.maincontainer}>
          {data.allMarkdownRemark.edges.map( ({node : post}) => {
            return(
              <div key={post.id} className={styles.postcontainer}>
                <div className={styles.date}>{post.frontmatter.date}</div>
                <Link
                  to={post.fields.slug}
                  className={styles.title}
                >
                  <div>{post.frontmatter.title}</div>
                </Link>
                <div>{post.frontmatter.spoiler}</div>
              </div>
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