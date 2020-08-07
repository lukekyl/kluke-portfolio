import React, { Component } from "react"
import { Row, Col, CardColumns, Card } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../images/projects/reldesign/reldesignHero.jpg"
import Image1 from '../images/projects/reldesign/reldesign-projectphoto-1.jpg'
import Image2 from "../images/projects/reldesign/reldesign-projectphoto-2.jpg"
import Image3 from "../images/projects/reldesign/reldesign-projectphoto-3.jpg"
import Image4 from "../images/projects/reldesign/reldesign-projectphoto-4.jpg"
import Image5 from "../images/projects/reldesign/reldesign-projectphoto-5.jpg"
import Image6 from "../images/projects/reldesign/reldesign-projectphoto-6.jpg"
import Image7 from "../images/projects/reldesign/reldesign-projectphoto-7.jpg"
import Image8 from "../images/projects/reldesign/reldesign-projectphoto-8.jpg"

import ProjectGrid from "../components/projectGrid"
import Mixer from '../components/mixer'
import Zoom from "react-medium-image-zoom"

const pageId="reldesign"

 
class Reldesign extends Component {
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
        <SEO title="reldesign" />
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
                  <h2>REL Central Design</h2>
                  <p>
                    Graphic design work for REL Central of the Institute of
                    Educational Sciences.
                  </p>
                </Card.Body>
                <Card.Footer>
                  <small>
                    Adobe CC Suite • Microsoft Office 365 • Section 508 & WCAG
                    2.0 AA Accessible Design
                  </small>
                </Card.Footer>
              </Card>
            </div>
          </Col>
          <Col lg={9}>
            <p>
              The Regional Educational Laboratory (REL) Central is a division of
              the Institute of Education Science that serves 7 states in the
              central region. The 10 RELs work in partnership with educators and
              policymakers to develop and use research that improves academic
              outcomes for students. The work they do includes Research Reports,
              Technical Assistance, Trainings, Workshops, Events and more.
            </p>
            <p>
              As the sole graphic and web designer for the contract, I have had
              the pleasure of producing a broad variety of design work for the
              REL Central team. These include report graphics, presentations,
              swag, templates, handouts, and infographics. IES requires all
              online content be 508 Compliant, meeting WCAG 2.0 AA accessibility
              standards.
            </p>
            <CardColumns>
              <Zoom>
                <Card>
                  <Card.Img src={Image2} alt="Test" />
                </Card>
              </Zoom>
              <Zoom>
                <Card>
                  <Card.Img src={Image3} alt="Test" />
                </Card>
              </Zoom>
              <Zoom>
                <Card>
                  <Card.Img src={Image5} alt="Test" />
                </Card>
              </Zoom>
              <Zoom>
                <Card>
                  <Card.Img src={Image1} alt="Test" />
                </Card>
              </Zoom>
              <Zoom>
                <Card>
                  <Card.Img src={Image4} alt="Test" />
                </Card>
              </Zoom>
              <Zoom>
                <Card>
                  <Card.Img src={Image6} alt="Test" />
                </Card>
              </Zoom>
            </CardColumns>
            <Zoom>
              <Card>
                <Card.Img src={Image8} alt="Test" />
              </Card>
            </Zoom>
            <Zoom>
              <Card>
                <Card.Img src={Image7} alt="Test" />
              </Card>
            </Zoom>
          </Col>
        </Row>
        <ProjectGrid page={pageId} />
        {this.state.mixer}
      </Layout>
    )
  }
}


export default Reldesign
