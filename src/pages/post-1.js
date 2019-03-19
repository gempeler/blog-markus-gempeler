import React from 'react'
import Layout from '../components/layout';
import { Link } from "gatsby"

const Post1 = () => {
  return (
    <Layout>
    <h1>Das ist der erste Post!</h1>
    <p>Willkommen zu meinem ersten Post</p>
    <Link to="/blog/">Zurück zum Blog</Link>
  </Layout>
  )
}

export default Post1

