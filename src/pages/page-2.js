import React from "react"
import { Link } from "gatsby"
import { Row, Col } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../images/projects/karsh/patriotsGrid.jpg"
import Image1 from '../images/projects/karsh/PFP-Portfolio-Display-1.jpg'
import Image2 from "../images/projects/karsh/PFP-Portfolio-Display-2.jpg"
import Image3 from "../images/projects/karsh/PFP-Portfolio-Display-3.jpg"
import Image4 from "../images/projects/karsh/PFP-Portfolio-Display-4.jpg"
import ImageGif from "../images/projects/karsh/FinalGIF.gif"

const SecondPage = () => (
  <Layout>
    <SEO title="Karsh Hagan" />
    <div
      className="hero project-hero d-flex align-items-center"
      style={{
        backgroundImage: `url(${Hero})`,
        backgroundSize: "cover",
        backgroundPosition: "50% 75%",
      }}
    >
      <div className="hero-copy flex-grow-1">{/* <h1>Karsh Hagan</h1> */}</div>
    </div>
    <Row className="project-body">
      <Col lg={3} className="project-stick">
        <div className="sticky-top">
          <h2>Karsh Hagan</h2>
          <p>
            UX Design internship mixed with some art direction and graphic
            design for non-profits.
          </p>
        </div>
      </Col>
      <Col lg={9}>
        <h4>Selected Project: Pets For Patriots</h4>
        <p>
          Pets for Patriots is a non-profit organization founded in 2009 aimed
          at helping military veterans suffering from effects like PTSD with
          companionship through pet adoption, while giving the most overlooked
          shelter dogs and cats hope and a home. The company partners with
          veterinary practices and animal shelters across the nation to
          facilitate adoptions. The company needs donation money to fund more
          adoptions, and it was our goal to compile a full ad campaign which
          would maximize the effectiveness of their limited advertising dollars
          towards two goals: Awareness and Gaining Donations.
        </p>
        <h4>Solution</h4>
        <p>
          In order to maximize awareness and donations the team research found
          two target markets that are empathetic to the company cause and are
          seen as some of the highest givers of donation money to not for profit
          companies. I wrote two personas for the team which better targeted our
          campaign media placement, ad creative, and landing page design. The
          finished result was a comprehensive ad campaign that would maximize
          Pets for Patriots awareness along with a conversion focused landing
          page design aimed at donations.
        </p>
        <img
          alt="Test"
          src={Image1}
          className="d-inline-block"
          style={{
            marginBottom: 0,
          }}
        />
        <img
          alt="Test"
          src={Image2}
          className="d-inline-block"
          style={{
            marginBottom: 0,
          }}
        />
        <img
          alt="Test"
          src={Image2}
          className="d-inline-block"
          style={{
            marginBottom: 0,
          }}
        />
        <img
          alt="Test"
          src={Image3}
          className="d-inline-block"
          style={{
            marginBottom: 0,
          }}
        />
        <img
          alt="Test"
          src={Image4}
          className="d-inline-block"
          style={{
            marginBottom: 0,
          }}
        />
        <img
          alt="Test"
          src={ImageGif}
          className="d-inline-block"
          style={{
            marginBottom: 0,
          }}
        />
      </Col>
    </Row>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
