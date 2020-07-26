import React from "react"
import { Link } from "gatsby"
import Emoji from "react-emoji-render"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="hero d-flex align-items-center">
        <div className="hero-copy flex-grow-1">
          <h1>Hi.<br />I'm <span>Kyle</span>.</h1>
          <h2>I'm a <span>Designer turned Developer</span> in Denver <Emoji text=":v:" /></h2>
        </div>
        <div>
          <h4>See My Work</h4>
        </div>
    </div>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
