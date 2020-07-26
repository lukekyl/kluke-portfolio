import React from "react"
import { Link } from "gatsby"
import Emoji from "react-emoji-render"
import Lottie from "react-lottie"
import * as moodbubble from "../images/5283-mood-bubble.json"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: moodbubble.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="hero d-flex align-items-center">
      <div className="hero-copy flex-grow-1">
        <h1>
          Hi.
          <br />
          I'm <span>Kyle</span>.
        </h1>
        <h2>
          I'm a <span>Designer turned Developer</span> in Denver{" "}
          <Emoji text=":v:" style={{ fontSize: "1.7em" }} />
        </h2>
      </div>
      <div className="lottie-container">
        <Lottie
          options={defaultOptions}
          height={"60vh"}
          width={"60vh"}
          speed={0.1}
          isStopped={false}
          isPaused={false}
        />
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
