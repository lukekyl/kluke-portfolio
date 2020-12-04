import React, { Component } from "react"
import { Col, Row, Button } from 'react-bootstrap'
import AnchorLink from "react-anchor-link-smooth-scroll"
import Emoji from "react-emoji-render"
import Lottie from "react-lottie"
import * as moodbubble from "../images/lottie/5283-mood-bubble.json"
import { AiFillLinkedin } from "react-icons/ai"
import { FaDev, FaGithubSquare } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

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
    mixer: ``,
    opacity: '1'
  }
  

  componentDidMount() {
    this.setState({
      mixer: <Mixer />,
    })

    if (typeof window !== "undefined") {
      window.onscroll = () => {
        let currentScrollPos = window.pageYOffset;
        let maxScroll = document.body.scrollHeight - window.innerHeight;
        // console.log(maxScroll)
        if (currentScrollPos > 0 && currentScrollPos < maxScroll) {
          this.setState({ opacity: "0" })
          // console.log(currentScrollPos)
        } else {
          this.setState({ opacity: "1" })
        }
      }
    }
  }

  render() {
    return (
      <Layout>
        <SEO title="Home | kyleluke.dev" />
        <div className="hero d-flex align-items-center">
          <div className="hero-copy flex-grow-1 fade-in">
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
          <div className="lottie-container d-none d-lg-block fade-in">
            <Lottie
              role={"none"}
              options={defaultOptions}
              height={"60vh"}
              width={"60vh"}
              speed={0.1}
              isStopped={false}
              isPaused={false}
            />
            <AnchorLink href="#selected-projects" offset="75">
              <h4>See My Work</h4>
            </AnchorLink>
          </div>
        </div>
        <div className="socials" style={{ opacity: `${this.state.opacity}`}} >
          <Row className="contact-icons fade-in">
            <Col><Button variant="dark" href="https://www.linkedin.com/in/kylewluke/" target=""><AiFillLinkedin /></Button></Col>
            <Col><Button variant="dark" href="https://github.com/lukekyl" target="_blank"><FaGithubSquare /></Button></Col>
            <Col><Button variant="dark" href="https://dev.to/lukekyl" target="_blank"><FaDev /></Button></Col>
            <Col><Button variant="dark" href="mailto:luke.kylew@gmail.com" ><MdEmail /></Button></Col>
          </Row>
        </div>
        <ProjectGrid />
        {this.state.mixer}
      </Layout>
    )
  }
}

export default IndexPage
