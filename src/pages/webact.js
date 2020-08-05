import React, { Component } from "react"
import { Row, Col, Card } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../images/projects/webact/webactHero.jpg"
import Image1 from '../images/projects/webact/webact-projectphoto-1.jpg'
import Image2 from "../images/projects/webact/webact-projectphoto-2.jpg"
import Image3 from "../images/projects/webact/webact-projectphoto-3.jpg"
import Image4 from "../images/projects/webact/webact-projectphoto-4.gif"

import ProjectGrid from "../components/projectGrid"
import Mixer from '../components/mixer'

const pageId="webact"

 
class Webact extends Component {
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
        <SEO title="webact" />
        <div
          className="hero project-hero d-flex align-items-center"
          style={{
            backgroundImage: `url(${Hero})`,
            backgroundSize: "cover",
            backgroundPosition: "50% 65%",
          }}
        >
          <div className="hero-copy flex-grow-1">
            {/* <h1>Karsh Hagan</h1> */}
          </div>
        </div>
        <Row className="project-body">
          <Col lg={3} className="project-stick">
            <div className="sticky-top">
              <Card>
                <Card.Body>
                  <h2>WebAct</h2>
                  <p>
                    Website design agency for small business specializing in SEO
                    and PPC ad campaign management.
                  </p>
                </Card.Body>
                <Card.Footer>
                  <small>
                    Duda Website Builder • Google Adwords Certified & Google
                    Partner • SEO Best Practices
                  </small>
                </Card.Footer>
              </Card>
            </div>
          </Col>
          <Col lg={9}>
            <p>
              With many options for a quick and easy website, many times
              it leaves unexperienced business owners with the question of which
              one offers the features they will need at the most cost effective price. 
              WebAct has partnered with the Duda website builder, which offers 
              small business owners a simple DIY solution with many of the SEO and 
              online shop features to be desired.
            </p>
            <p>
              During my time at WebAct, I became certified in both Google Adwords 
              and as a Google Partner. I was able to build websites for several online 
              retail clients, optimize website SEO rankings across targeted keywords, and manage 
              Pay-Per-Click campaigns across several platforms for targeted advertising.
            </p>

            <img
              alt="Test"
              src={Image1}
              className="d-inline-block"
              style={{
                marginBottom: 0,
                width: "100%",
              }}
            />
            <img
              alt="Test"
              src={Image2}
              className="d-inline-block"
              style={{
                marginBottom: 0,
                width: "100%",
              }}
            />
            <img
              alt="Test"
              src={Image3}
              className="d-inline-block"
              style={{
                marginBottom: 0,
                width: "100%",
              }}
            />
            <img
              alt="Test"
              src={Image4}
              className="d-inline-block"
              style={{
                marginBottom: 0,
                width: "100%",
              }}
            />
          </Col>
        </Row>
        <ProjectGrid page={pageId} />
        {this.state.mixer}
      </Layout>
    )
  }
}


export default Webact
