// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
// import { Navbar, Nav } from "react-bootstrap"
// import Logo from '../images/KLogo.svg'


const Footer = ({ siteTitle }) => (
  <footer sticky="bottom" >
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
