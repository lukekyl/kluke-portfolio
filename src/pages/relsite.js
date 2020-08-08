import React, { Component } from "react"
import { Row, Col, CardColumns, Card, Button } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../images/projects/relsite/relsiteHero.jpg"
import Image1 from '../images/projects/relsite/relsite-projectphoto-1.jpg'
import Image2 from "../images/projects/relsite/relsite-projectphoto-2.jpg"
import Image3 from "../images/projects/relsite/relsite-projectphoto-3.jpg"
import Image4 from "../images/projects/relsite/relsite-projectphoto-4.jpg"

import ProjectGrid from "../components/projectGrid"
import Mixer from '../components/mixer'
import Zoom from "react-medium-image-zoom"

const pageId="relsite"

 
class Relsite extends Component {
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
        <SEO title="relsite" />
        <div
          className="hero project-hero d-flex align-items-center"
          style={{
            backgroundImage: `url(${Hero})`,
            backgroundSize: "cover",
            backgroundPosition: "50% 30%",
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
                  <h2>REL Central Website</h2>
                  <p>
                    Development and management of REL Central portion of the
                    Institute of Educational Sciences website.
                  </p>
                  <Button
                    className="project-button"
                    variant="outline-dark"
                    size="sm"
                    href="https://ies.ed.gov/ncee/edlabs/regions/central/index.asp"
                    target="_blank"
                  >
                    View Website
                  </Button>
                </Card.Body>
                <Card.Footer>
                  <small>
                    Active Server Pages Framework • Section 508 & WCAG 2.0 AA
                    Accessibility Minimum
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
              Technical Assistance, Trainings, Workshops, Events, and more.
            </p>
            <p>
              REL Central maintains a website and blog, providing educators with
              updates on research findings, tools, and releases. As the web
              developer for the REL Central team, I manage the REL Central
              portion of the IES website, running on an ASP framework and built
              with HTML, CSS, and JavaScript. IES requires a Public Trust 5c 
              security clearance, and for it's website and online content be 
              508 Compliant, meeting WCAG 2.0 AA accessibility standards.
            </p>
            <CardColumns>
              <Zoom>
                <Card>
                  <Card.Img src={Image1} alt="REL Central project example image." />
                </Card>
              </Zoom>
              <Zoom>
                <Card>
                  <Card.Img src={Image3} alt="REL Central project example image." />
                </Card>
              </Zoom>
              <Zoom>
                <Card>
                  <Card.Img src={Image2} alt="REL Central project example image." />
                </Card>
              </Zoom>
              <Zoom>
                <Card>
                  <Card.Img src={Image4} alt="REL Central project example image." />
                </Card>
              </Zoom>
            </CardColumns>
          </Col>
        </Row>
        <ProjectGrid page={pageId} />
        {this.state.mixer}
      </Layout>
    )
  }
}


export default Relsite
