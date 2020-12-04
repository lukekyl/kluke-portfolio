/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
// import { Navbar } from 'react-bootstrap'
import SEO from "./seo"
import Header from "./header"
import Footer from "./footer"

import "../styles/layout.css"
import "../styles/styles.scss"
import "../styles/mixitup.scss"
import "../styles/projectimages.scss"
import "react-medium-image-zoom/dist/styles.css"


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const siteTitle = data.site.siteMetadata.title
    const image = post.frontmatter.image
      ? post.frontmatter.image.childImageSharp.resize
      : null

  console.log(post.frontmatter)

  return (
    <>
      <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          image={image}
          pathname={this.props.location.pathname}
      />
      <Header siteTitle={siteTitle} />
      <div
        style={{
          margin: `2vh auto`,
          maxWidth: '90vw',
          padding: `0 auto`,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer siteTitle={data.site.siteMetadata.title} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
