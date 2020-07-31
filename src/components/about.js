import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Row, Col, Button } from "react-bootstrap"
import { AiFillLinkedin, AiFillFacebook } from "react-icons/ai"
import { FaMountain, FaDev, FaGithubSquare } from "react-icons/fa"
import { MdLaptopMac, MdPhotoLibrary, MdEmail } from "react-icons/md"
// import Logo from '../images/KLogo.svg'




const About = ({ siteTitle }) => (
    <div
        className="about"
        style={{
          margin: `2vh auto`,
          maxWidth: '90vw',
          padding: `0 auto`,
        }}
      >
      <h2>Kyle Luke</h2>
        <Row className="about-icons">
            <Col><MdLaptopMac /><br />Develop</Col>
            <Col><FaMountain /><br />Adventure</Col>
            <Col><MdPhotoLibrary /><br />Design</Col>
        </Row>
        <Col>
            <p><i>"But I don't want comfort. I want poetry. I want danger. I want freedom. I want goodness. I want sin."</i><br />&mdash; Brave New World</p>
            <p>Creating things is my jam.<br />Visually engaging design.<br />Purposeful and story driven content.<br />Continuously learning.<br />Pushing boundaries.</p>
        </Col>
        <Row className="contact-icons">
            <Col><Button variant="dark" href="/" >Download Resume</Button></Col>
        </Row>
        <hr />
        <Row className="contact-icons">
            <Col><Button variant="dark" href="https://www.linkedin.com/in/kylewluke/" target=""><AiFillLinkedin /></Button></Col>
            <Col><Button variant="dark" href="https://github.com/lukekyl" target="_blank"><FaGithubSquare /></Button></Col>
            <Col><Button variant="dark" href="https://dev.to/lukekyl" target="_blank"><FaDev /></Button></Col>
            <Col><Button variant="dark" href="mailto:luke.kylew@gmail.com" ><MdEmail /></Button></Col>
        </Row>
        <Link to='/'><small>kyleluke.dev</small></Link>
    </div>
)

About.propTypes = {
  siteTitle: PropTypes.string,
}

About.defaultProps = {
  siteTitle: ``,
}

export default About
