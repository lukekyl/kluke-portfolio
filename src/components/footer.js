// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Emoji from "react-emoji-render"
import { Navbar, Container, Row, Col} from "react-bootstrap"
// import Logo from '../images/KLogo.svg'


const Footer = ({ siteTitle }) => (
  <Navbar 
  sticky="bottom"  
  className="footer"
  style={{
    marginTop: `8vh`,
  }}
  >
  <Container fluid>
    <Row style={{ margin: '0',width: '100%'}}>
        <Col sm={12} md={6}>Made with&nbsp;<Emoji text="❤️" />&nbsp;by Kyle Luke</Col>
        <Col className="copywrite" sm={12} md={6} style={{ textAlign: 'right'}}>© {new Date().getFullYear()}</Col>
    </Row>
  </Container>
  </Navbar>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
