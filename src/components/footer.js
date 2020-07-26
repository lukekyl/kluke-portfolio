// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Emoji from "react-emoji-render"
// import { Navbar, Nav } from "react-bootstrap"
// import Logo from '../images/KLogo.svg'


const Footer = ({ siteTitle }) => (
  <footer sticky="bottom">
    <br />© {new Date().getFullYear()} | Gatsby and React Js | Made with <Emoji text="❤️" /> by Kyle Luke
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
