// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Emoji from "react-emoji-render"
import { Navbar} from "react-bootstrap"
// import Logo from '../images/KLogo.svg'


const Footer = ({ siteTitle }) => (
  <Navbar sticky="bottom"  
  style={{
    marginTop: `10vh`,
  }}
  >
    {siteTitle} © {new Date().getFullYear()} | Gatsby & React | Made with&nbsp;<Emoji text="❤️" />&nbsp;by Kyle Luke
  </Navbar>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
