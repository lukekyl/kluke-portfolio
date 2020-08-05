import React, { Component } from "react"
import { Row, Col, Card } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../images/projects/personal/personalHero.jpg"
import Image1 from '../images/projects/personal/personal-projectphoto-1.jpg'
import Image2 from "../images/projects/personal/personal-projectphoto-2.jpg"
import Image3 from "../images/projects/personal/personal-projectphoto-3.jpg"
import Image4 from "../images/projects/personal/personal-projectphoto-4.jpg"

import ProjectGrid from "../components/projectGrid"
import Mixer from '../components/mixer'

const pageId="personal"

 
class Personal extends Component {
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
        <SEO title="personal" />
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
                  <h2>Personal Design</h2>
                  <p>
                    A few of the fun projects I have made, because ... why not!
                  </p>
                </Card.Body>
                <Card.Footer>
                  <small>
                    Adobe CC Suite • Figma • Invision Suite • Fun Stuff •
                    Getting My Hands Dirty
                  </small>
                </Card.Footer>
              </Card>
            </div>
          </Col>
          <Col lg={9}>
            <p>
              I like to make fun things. Design is a passion of mine and I spend
              probably too much time playing with different personal projects,
              from building things with my hands, to designing things digitally.
              Some of the most recent projects include a lookbook for a local
              distillery in my hometown, a tribute to my favorite design
              movement, a different take on a classic magazine, and a handmade
              book toasting one of my favorite hobbies.
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


export default Personal
