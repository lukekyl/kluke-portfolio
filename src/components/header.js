import { Link } from "gatsby"
import React, { Component } from "react"
import { Navbar, Nav } from "react-bootstrap"
import { RiMenuLine, RiMenu5Line, RiMenu4Line, RiCloseLine } from "react-icons/ri"
import Logo from '../images/KLogo.svg'


let iconStandard = <RiMenu5Line />
let iconHover = <RiMenuLine />
let iconClicked = <RiCloseLine />

class Header extends Component {

  state={
    toggle: false,
    icon: iconStandard
  }

  handleHover = () => {
    if (this.state.toggle !== true) {
      this.setState ({
        icon: iconHover
      })
    }
  }

  handleLeave = () => {
    if (this.state.toggle !== true) {
      this.setState ({
        icon: iconStandard
      })
    }
  }

  handleToggle = () => {
    if (this.state.toggle === true) {
      this.setState({
        toggle: false,
        icon: iconStandard
      })
    } else {
      this.setState({
        toggle: true,
        icon: iconClicked
      })
    }
  }

  render() {

  return (
    <Navbar
      expand="false"
      sticky="top"
      bg="white"
      style={{
        marginBottom: `2vh`,
      }}
    >
      <Link to="/">
        <Navbar.Brand href="/">
          <img
            alt="Kyle Luke Logo"
            src={Logo}
            width="45"
            height="45"
            className="d-inline-block"
            style={{
              marginBottom: 0,
            }}
          />{" "}
          {/* {siteTitle} */}
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={this.handleToggle}
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleLeave}
      >
        {this.state.icon}
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav" display="flex">
        <Nav className="mr-auto">
        <Link to="/">Home</Link>
        <Link to="/page-2/">Page 2</Link> 
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
  }
};

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
