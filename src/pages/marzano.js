import React, { Component } from "react"
import { Row, Col, Card, Button, CardColumns } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import ProjectGrid from "../components/projectGrid"
import Mixer from '../components/mixer'
import Zoom from "react-medium-image-zoom"

const pageId="marzano"


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
             relativePath: { eq: "projects/marzano/marzanoHero.jpg" }
           ) {
             ...fluidImage
           }
           imageOne: file(
             relativePath: { eq: "projects/marzano/marzano-projectphoto-1.jpg" }
           ) {
             ...fluidImage
           }
           imageTwo: file(
             relativePath: { eq: "projects/marzano/marzano-projectphoto-2.jpg" }
           ) {
             ...fluidImage
           }
           imageThree: file(
             relativePath: { eq: "projects/marzano/marzano-projectphoto-3.jpg" }
           ) {
             ...fluidImage
           }
           imageFour: file(
             relativePath: { eq: "projects/marzano/marzano-projectphoto-4.jpg" }
           ) {
             ...fluidImage
           }
           imageFive: file(
             relativePath: { eq: "projects/marzano/marzano-projectphoto-5.jpg" }
           ) {
             ...fluidImage
           }
           imageSix: file(
             relativePath: { eq: "projects/marzano/marzano-projectphoto-6.jpg" }
           ) {
             ...fluidImage
           }
           imageSeven: file(
             relativePath: { eq: "projects/marzano/marzano-projectphoto-7.jpg" }
           ) {
             ...fluidImage
           }
           imageEight: file(
             relativePath: { eq: "projects/marzano/marzano-projectphoto-8.jpg" }
           ) {
             ...fluidImage
           }
         }
       `
 
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
        <SEO title="Marzano Research | kyleluke.dev" />
        <div
          className="hero project-hero d-flex align-items-center"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "50% 50%",
            overflow: "hidden",
            width: '100%',
          }}
        >
          <Img
            fluid={this.props.data.projectHero.childImageSharp.fluid}
            imgStyle={{ objectFit: "cover" }}
            alt="Marzano Research hero image."
          />
          <div className="hero-copy flex-grow-1">
            {/* <h1>Marzano Research</h1> */}
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
              <Zoom>
                <Card>
                  <Img
                    fluid={this.props.data.imageOne.childImageSharp.fluid}
                    imgStyle={{ objectFit: "cover" }}
                    alt="Marzano Research project example image."
                  />
                </Card>
              </Zoom>
              <Zoom>
                <Card>
                  <Img
                    fluid={this.props.data.imageTwo.childImageSharp.fluid}
                    imgStyle={{ objectFit: "cover" }}
                    alt="Marzano Research project example image."
                  />
                </Card>
              </Zoom>
              <Zoom>
                <Card>
                  <Img
                    fluid={this.props.data.imageEight.childImageSharp.fluid}
                    imgStyle={{ objectFit: "cover" }}
                    alt="Marzano Research project example image."
                  />
                </Card>
              </Zoom>
              <Zoom>
                <Card>
                  <Img
                    fluid={this.props.data.imageSeven.childImageSharp.fluid}
                    imgStyle={{ objectFit: "cover" }}
                    alt="Marzano Research project example image."
                  />
                </Card>
              </Zoom>
              <Zoom>
                <Card>
                  <Img
                    fluid={this.props.data.imageThree.childImageSharp.fluid}
                    imgStyle={{ objectFit: "cover" }}
                    alt="Marzano Research project example image."
                  />
                </Card>
              </Zoom>
              <Zoom>
                <Card>
                  <Img
                    fluid={this.props.data.imageFour.childImageSharp.fluid}
                    imgStyle={{ objectFit: "cover" }}
                    alt="Marzano Research project example image."
                  />
                </Card>
              </Zoom>
              <Zoom>
                <Card>
                  <Img
                    fluid={this.props.data.imageSix.childImageSharp.fluid}
                    imgStyle={{ objectFit: "cover" }}
                    alt="Marzano Research project example image."
                  />
                </Card>
              </Zoom>
              <Zoom>
                <Card>
                  <Img
                    fluid={this.props.data.imageFive.childImageSharp.fluid}
                    imgStyle={{ objectFit: "cover" }}
                    alt="Marzano Research project example image."
                  />
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


export default Marzano
