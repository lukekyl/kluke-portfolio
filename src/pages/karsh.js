import React, { Component } from "react"
import { Row, Col, Card } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import ImageGif from "../images/projects/karsh/karsh-projectphoto-5.gif"

import ProjectGrid from "../components/projectGrid"
import Mixer from '../components/mixer'


const pageId="karsh"

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
             relativePath: { eq: "projects/karsh/karshHero.jpg" }
           ) {
             ...fluidImage
           }
           imageOne: file(
             relativePath: { eq: "projects/karsh/karsh-projectphoto-1.jpg" }
           ) {
             ...fluidImage
           }
           imageTwo: file(
             relativePath: { eq: "projects/karsh/karsh-projectphoto-2.jpg" }
           ) {
             ...fluidImage
           }
           imageThree: file(
             relativePath: { eq: "projects/karsh/karsh-projectphoto-3.jpg" }
           ) {
             ...fluidImage
           }
           imageFour: file(
             relativePath: { eq: "projects/karsh/karsh-projectphoto-4.jpg" }
           ) {
             ...fluidImage
           }
         }
       `


class KarshHagan extends Component {
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
        <SEO title="karsh" />
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
            alt="Karsh Hagan hero image."
          />
          <div className="hero-copy flex-grow-1">
            {/* <h1>Karsh Hagan</h1> */}
          </div>
        </div>
        <Row className="project-body">
          <Col lg={3} className="project-stick">
            <div className="sticky-top">
              <Card>
                <Card.Body>
                  <h2>Karsh Hagan</h2>
                  <p>
                    UX Design internship mixed with some art direction and
                    graphic design for non-profits.
                  </p>
                </Card.Body>
                <Card.Footer>
                  <small>
                    Adobe CC Suite • Sketch • Google Analytics • Storyboarding •
                    Journey Mapping • Click Paths • Wireframes
                  </small>
                </Card.Footer>
              </Card>
            </div>
          </Col>
          <Col lg={9}>
            <p>
              Karsh Hagan is an independant design and advertising agency with a
              well known and respected history in the Denver area. As a new
              design grad, I was able to intern under their design and
              interactive team, learning tons about the industry and agency
              life. Among other things like assisting the team with client and
              in-house design work, intern team was able to work on the agency's
              non-profit client projects. Pet's For Patriots was one of those
              non-profit clients, highlighted below.
            </p>
            <h4>Selected Project: Pets For Patriots</h4>
            <p>
              Pets for Patriots is a non-profit organization founded in 2009
              aimed at helping military veterans suffering from effects like
              PTSD with companionship through pet adoption, while giving the
              most overlooked shelter dogs and cats hope and a home. The company
              partners with veterinary practices and animal shelters across the
              nation to facilitate adoptions. The company needs donation money
              to fund more adoptions, and it was our goal to compile a full ad
              campaign which would maximize the effectiveness of their limited
              advertising dollars towards two goals: Awareness and Gaining
              Donations.
            </p>
            <h4>Solution</h4>
            <p>
              In order to maximize awareness and donations the team research
              found two target markets that are empathetic to the company cause
              and are seen as some of the highest givers of donation money to
              non-profit companies. I wrote two personas for the team which
              better targeted our campaign media placement, ad creative, and
              landing page design. The finished result was a comprehensive ad
              campaign that would maximize Pets for Patriots awareness along
              with a conversion focused landing page design aimed at donations.
            </p>
            <Card className="no-radius">
              <Img
                fluid={this.props.data.imageOne.childImageSharp.fluid}
                imgStyle={{ objectFit: "cover" }}
                alt="Karsh project example image."
              />
              <Img
                fluid={this.props.data.imageTwo.childImageSharp.fluid}
                imgStyle={{ objectFit: "cover" }}
                alt="Karsh project example image."
              />
              <Img
                fluid={this.props.data.imageThree.childImageSharp.fluid}
                imgStyle={{ objectFit: "cover" }}
                alt="Karsh project example image."
              />
              <Card.Img
                src={ImageGif}
                alt="Karsh Hagan project example image."
                style={{ marginBottom: 0, width: "100%" }}
              />
              <Img
                fluid={this.props.data.imageFour.childImageSharp.fluid}
                imgStyle={{ objectFit: "cover" }}
                alt="Karsh project example image."
              />
            </Card>
          </Col>
        </Row>
        <ProjectGrid page={pageId} />
        {this.state.mixer}
      </Layout>
    )
  }
}


export default KarshHagan
