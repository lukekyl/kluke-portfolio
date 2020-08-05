import React, { Component } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Emoji from "react-emoji-render"
import Lottie from "react-lottie"
import * as moodbubble from "../images/lottie/5283-mood-bubble.json"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectGrid from "../components/projectGrid"
import Mixer from '../components/mixer'

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: moodbubble.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }




class IndexPage extends Component {
  state = {
    mixer: ``
  }

    componentDidMount() {
      this.setState({
        mixer: <Mixer />
      })
    }

      
  render() {
      return (
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
                role={"none"}
                options={defaultOptions}
                height={"60vh"}
                width={"60vh"}
                speed={0.1}
                isStopped={false}
                isPaused={false}
              />
              <AnchorLink href="#selected-projects" offset='75'>
                <h4>See My Work</h4>
              </AnchorLink>
            </div>
          </div>
          <ProjectGrid />
          {this.state.mixer}
        </Layout>
      )
  }
}

export default IndexPage
