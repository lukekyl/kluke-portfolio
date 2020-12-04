import React, { Component } from "react"
import { Row, Col, CardColumns, Card } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import ProjectGrid from "../components/projectGrid"
import Mixer from '../components/mixer'
import Zoom from "react-medium-image-zoom"

const pageId="reldesign"


export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1600) {
        ...GatsbyImageSharpFluid
      }
      original {
        width
      }
    }
  }
`;

export const pageQuery = graphql`
         query {
           projectHero: file(
             relativePath: { eq: "projects/reldesign/reldesignHero.jpg" }
           ) {
             ...fluidImage
           }
           imageOne: file(
             relativePath: { eq: "projects/reldesign/reldesign-projectphoto-1.jpg" }
           ) {
             ...fluidImage
           }
           imageTwo: file(
             relativePath: { eq: "projects/reldesign/reldesign-projectphoto-2.jpg" }
           ) {
             ...fluidImage
           }
           imageThree: file(
             relativePath: { eq: "projects/reldesign/reldesign-projectphoto-3.jpg" }
           ) {
             ...fluidImage
           }
           imageFour: file(
             relativePath: { eq: "projects/reldesign/reldesign-projectphoto-4.jpg" }
           ) {
             ...fluidImage
           }
           imageFive: file(
             relativePath: { eq: "projects/reldesign/reldesign-projectphoto-5.jpg" }
           ) {
             ...fluidImage
           }
           imageSix: file(
             relativePath: { eq: "projects/reldesign/reldesign-projectphoto-6.jpg" }
           ) {
             ...fluidImage
           }
           imageSeven: file(
             relativePath: { eq: "projects/reldesign/reldesign-projectphoto-7.jpg" }
           ) {
             ...fluidImage
           }
           imageEight: file(
             relativePath: { eq: "projects/reldesign/reldesign-projectphoto-8.jpg" }
           ) {
             ...fluidImage
           }
         }
       `

 
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
        <SEO title="REL Design" />
        <div
          className="hero project-hero d-flex align-items-center"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "50% 65%",
            overflow: "hidden",
          }}
        >
          <Img
            fluid={this.props.data.projectHero.childImageSharp.fluid}
            imgStyle={{ objectFit: "cover" }}
            alt="REL Central project hero image."
          />
          <div className="hero-copy flex-grow-1">
            {/* <h1>REL Central Design</h1> */}
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
                  <Img
                    fluid={this.props.data.imageTwo.childImageSharp.fluid}
                    imgStyle={{ objectFit: "cover" }}
                    alt="REL Central project example image."
                  />
                </Card>
              </Zoom>
              <Zoom>
                <Card>
                  <Img
                    fluid={this.props.data.imageThree.childImageSharp.fluid}
                    imgStyle={{ objectFit: "cover" }}
                    alt="REL Central project example image."
                  />
                </Card>
              </Zoom>
              <Zoom>
                <Card>
                  <Img
                    fluid={this.props.data.imageFive.childImageSharp.fluid}
                    imgStyle={{ objectFit: "cover" }}
                    alt="REL Central project example image."
                  />
                </Card>
              </Zoom>
              <Zoom>
                <Card>
                  <Img
                    fluid={this.props.data.imageOne.childImageSharp.fluid}
                    imgStyle={{ objectFit: "cover" }}
                    alt="REL Central project example image."
                  />
                </Card>
              </Zoom>
              <Zoom>
                <Card>
                  <Img
                    fluid={this.props.data.imageFour.childImageSharp.fluid}
                    imgStyle={{ objectFit: "cover" }}
                    alt="REL Central project example image."
                  />
                </Card>
              </Zoom>
              <Zoom>
                <Card>
                  <Img
                    fluid={this.props.data.imageSix.childImageSharp.fluid}
                    imgStyle={{ objectFit: "cover" }}
                    alt="REL Central project example image."
                  />
                </Card>
              </Zoom>
            </CardColumns>
            <Zoom>
              <Card style={{ marginBottom: '.75rem' }}>
                <Img
                  fluid={this.props.data.imageEight.childImageSharp.fluid}
                  imgStyle={{ objectFit: "cover" }}
                  alt="REL Central project example image."
                />
              </Card>
            </Zoom>
            <Zoom>
              <Card style={{ marginBottom: '.75rem' }}>
                <Img
                  fluid={this.props.data.imageSeven.childImageSharp.fluid}
                  imgStyle={{ objectFit: "cover" }}
                  alt="REL Central project example image."
                />
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
