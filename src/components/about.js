import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, Row, Col } from "react-bootstrap"
// import Logo from '../images/KLogo.svg'

const About = ({ siteTitle }) => (
    <div
        style={{
          margin: `2vh auto`,
          maxWidth: '90vw',
          padding: `0 auto`,
        }}
      >
    About Me
    </div>
)

About.propTypes = {
  siteTitle: PropTypes.string,
}

About.defaultProps = {
  siteTitle: ``,
}

export default About
