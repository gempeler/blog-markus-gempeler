import { Link } from "gatsby"
import React from "react"
import styles from './header.module.css';

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <div className={styles.container}>
      <h1>
        <Link
          to="/blog"
          className={styles.link}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)


export default Header
