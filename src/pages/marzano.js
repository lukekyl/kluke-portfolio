import React, { Component } from "react"
import { Row, Col, Card, Button, CardColumns } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../images/projects/marzano/marzanoHero.jpg"
import Image1 from '../images/projects/marzano/marzano-projectphoto-1.jpg'
import Image2 from "../images/projects/marzano/marzano-projectphoto-2.jpg"
import Image3 from "../images/projects/marzano/marzano-projectphoto-3.jpg"
import Image4 from "../images/projects/marzano/marzano-projectphoto-4.jpg"
import Image5 from "../images/projects/marzano/marzano-projectphoto-5.jpg"
import Image6 from "../images/projects/marzano/marzano-projectphoto-6.jpg"
import Image7 from "../images/projects/marzano/marzano-projectphoto-7.jpg"

import ProjectGrid from "../components/projectGrid"
import Mixer from '../components/mixer'

const pageId="marzano"

 
class Marzano extends Component {
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
        <SEO title="marzano" />
        <div
          className="hero project-hero d-flex align-items-center"
          style={{
            backgroundImage: `url(${Hero})`,
            backgroundSize: "cover",
            backgroundPosition: "50% 50%",
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
                  <h2>Marzano Research</h2>
                  <p>
                    Lead design efforts for new ownership rebranding and all
                    client-based design needs.
                  </p>
                  <Button
                    className="project-button"
                    variant="outline-dark"
                    size="sm"
                    href="https://www.marzanoresearch.com"
                    target="_blank"
                  >
                    View Website
                  </Button>
                </Card.Body>
                <Card.Footer>
                  <small>
                    Wordpress • Adobe CC Suite • Figma • Microsoft Office 365 •
                    Accessible Design
                  </small>
                </Card.Footer>
              </Card>
            </div>
          </Col>
          <Col lg={9}>
            <p>
              Marzano Research provides evidence-based research, evaluation,
              technical assistance, and consulting to improve education and
              student outcomes. In 2019 Marzano Research changed ownership to be
              a woman owned small business, and member of the Benefit
              Corporations for Good. Today Marzano Research has become one of
              the leading education improvement organizations in the country,
              assisting federal, state, local, and private partners.
            </p>
            <p>
              With the recent ownership change, I have had the opportunity to
              lead the design work for the company rebrand. This includes a
              building and managing a new website, logo and brand work. Some
              client projects also require a variety of design work including
              wireframes, handouts and infographics.
            </p>
            <CardColumns>
              <Card>
                <Card.Img src={Image1} alt="Test" />
              </Card>
              <Card>
                <Card.Img src={Image2} alt="Test" />
              </Card>
              <Card>
                <Card.Img src={Image7} alt="Test" />
              </Card>
              <Card>
                <Card.Img src={Image3} alt="Test" />
              </Card>
              <Card>
                <Card.Img src={Image4} alt="Test" />
              </Card>
              <Card>
                <Card.Img src={Image5} alt="Test" />
              </Card>
              <Card>
                <Card.Img src={Image6} alt="Test" />
              </Card>
            </CardColumns>
          </Col>
        </Row>
        <ProjectGrid page={pageId} />
        {this.state.mixer}
      </Layout>
    )
  }
}


export default Marzano
