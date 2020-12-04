import React, { Component } from "react"
import { Row, Col, Card } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import ProjectGrid from "../components/projectGrid"
import Mixer from '../components/mixer'

const pageId="personal"

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
             relativePath: { eq: "projects/personal/personalHero.jpg" }
           ) {
             ...fluidImage
           }
           imageOne: file(
             relativePath: { eq: "projects/personal/personal-projectphoto-1.jpg" }
           ) {
             ...fluidImage
           }
           imageTwo: file(
             relativePath: { eq: "projects/personal/personal-projectphoto-2.jpg" }
           ) {
             ...fluidImage
           }
           imageThree: file(
             relativePath: { eq: "projects/personal/personal-projectphoto-3.jpg" }
           ) {
             ...fluidImage
           }
           imageFour: file(
             relativePath: { eq: "projects/personal/personal-projectphoto-4.jpg" }
           ) {
             ...fluidImage
           }
         }
       `

 
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
        <SEO title="Personal Projects" />
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
            alt="Personal project hero image."
          />
          <div className="hero-copy flex-grow-1">
            {/* <h1>Personal Projets</h1> */}
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
            <Card className="no-radius">
              <Img
                fluid={this.props.data.imageOne.childImageSharp.fluid}
                imgStyle={{ objectFit: "cover" }}
                alt="Personalproject example image."
              />
              <Img
                fluid={this.props.data.imageTwo.childImageSharp.fluid}
                imgStyle={{ objectFit: "cover" }}
                alt="Personal project example image."
              />
              <Img
                fluid={this.props.data.imageThree.childImageSharp.fluid}
                imgStyle={{ objectFit: "cover" }}
                alt="Personal project example image."
              />
              <Img
                fluid={this.props.data.imageFour.childImageSharp.fluid}
                imgStyle={{ objectFit: "cover" }}
                alt="Personal project example image."
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


export default Personal
