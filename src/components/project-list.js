import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
import { CardDeck, Card, Row, Col, Button } from "react-bootstrap"

class ProjectList extends Component {
  state = {
    'marzano': 'marzano',
    'relsite': 'relsite',
    'reldesign': 'reldesign',
    'webact': 'webact',
    'karsh': 'karsh',
    'personal': 'personal'
  }
  componentDidMount() {
    if (this.props.page !== null) {
      this.setState({
        [this.props.page]: `active`
      })
    }
  }

  render() {
    return (
      <CardDeck>
        {/* Postpandemic */}
        <Card className="project dev frontend backend js react rails" data-cat="dev frontend backend js react rails">
          <Card.Body className="project-card">
            <Row>
              <Col>
                <Card.Title className="project-title">
                  postpandemic
                </Card.Title>
              </Col>
              <Col className="project-links">
                <Button className="project-button" variant="outline-dark"
                  size="sm"
                  href="https://github.com/lukekyl/postpandemic"
                  target="_blank"
                >
                  Github
                </Button>
                <Button className="project-button" variant="outline-dark"
                  size="sm"
                  href="https://postpandemic.herokuapp.com/"
                  target="_blank"
                >
                  Demo
                </Button>
              </Col>
            </Row>
            <Row>
              <Col md={8}>
                <Card.Text className="project-description">
                  A single page web application providing messages of hope
                  for a world recovering from the Coronavirus Pandemic.
                </Card.Text>
              </Col>
              <Col>
                <Card.Text className="project-type">
                  React Frontend + Rails Backend
                </Card.Text>
              </Col>
            </Row>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              Ruby on Rails • React • Redux • Redux Thunk • React
              Bootstrap • Unsplash API • CSS Animations
            </small>
          </Card.Footer>
        </Card>
        {/* HellaFresh */}
        <Card className="project dev frontend backend js rails" data-cat="dev frontend backend js rails" >
          <Card.Body className="project-card">
            <Row>
              <Col>
                <Card.Title className="project-title">
                  HellaFresh
                </Card.Title>
              </Col>
              <Col className="project-links">
                <Button className="project-button" variant="outline-dark"
                  size="sm"
                  href="https://github.com/lukekyl/HellaFresh"
                  target="_blank"
                >
                  Github
                </Button>
                <Button className="project-button" variant="outline-dark"
                  size="sm"
                  href="https://hellafresh.herokuapp.com/"
                  target="_blank"
                >
                  Demo
                </Button>
              </Col>
            </Row>
            <Row>
              <Col md={8}>
                <Card.Text className="project-description">
                  A single page online ordering web application template
                  for all types of delivery services.
                </Card.Text>
              </Col>
              <Col>
                <Card.Text className="project-type">
                  Javascript Frontend + Rails Backend
                </Card.Text>
              </Col>
            </Row>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              Ruby on Rails • ECMAScript 6 Vanilla Javascript • Foundation
              Frontend Framework
            </small>
          </Card.Footer>
        </Card>
        {/* Filtered. */}
        <Card className="project dev frontend backend rails" data-cat="dev frontend backend rails" >
          <Card.Body className="project-card">
            <Row>
              <Col>
                <Card.Title className="project-title">
                  Filtered.
                </Card.Title>
              </Col>
              <Col className="project-links">
                <Button className="project-button" variant="outline-dark"
                  size="sm"
                  href="https://github.com/lukekyl/Filtered"
                  target="_blank"
                >
                  Github
                </Button>
                <Button className="project-button" variant="outline-dark"
                  size="sm"
                  href="https://filteredcoffee.herokuapp.com/"
                  target="_blank"
                >
                  Demo
                </Button>
              </Col>
            </Row>
            <Row>
              <Col md={8}>
                <Card.Text className="project-description">
                  An app for coffee lovers. Filtered lets users review the
                  coffee they try and find new favorites.
                </Card.Text>
              </Col>
              <Col>
                <Card.Text className="project-type">
                  Ruby on Rails MVC Application with OmniAuth
                </Card.Text>
              </Col>
            </Row>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              Ruby on Rails • Secure Login with Devise and OmniAuth •
              Foundation Frontend Framework
            </small>
          </Card.Footer>
        </Card>
        {/* Marzano Research */}
        <Card id={this.state.marzano} className="project dev frontend design" data-cat="dev frontend design" >
          <Card.Body className="project-card">
            <Row>
              <Col>
                <Card.Title className="project-title">
                  Marzano Research
                </Card.Title>
              </Col>
              <Col className="project-links">
                <Button className="project-button" variant="outline-dark"
                  size="sm"
                  href="https://www.marzanoresearch.com"
                  target="_blank"
                >
                  Website
                </Button>
                <Link to='/page-2/'>
                <Button className="project-button" variant="outline-dark"
                  size="sm"
                >
                  More
                </Button>
                </Link>
              </Col>
            </Row>
            <Row>
              <Col md={8}>
                <Card.Text className="project-description">
                  Lead design efforts for new ownership rebranding and all
                  client-based design needs.
                </Card.Text>
              </Col>
              <Col>
                <Card.Text className="project-type">
                  Website, Infographics, Handouts, etc.
                </Card.Text>
              </Col>
            </Row>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              Wordpress • Adobe CC Suite • Figma • Microsoft Office 365 •
              Accessible Design
            </small>
          </Card.Footer>
        </Card>
        {/* REL Central Website */}
        <Card id={this.state.relsite} className="project dev frontend js" data-cat="dev frontend js" >
          <Card.Body className="project-card">
            <Row>
              <Col>
                <Card.Title className="project-title">
                  REL Central Website
                </Card.Title>
              </Col>
              <Col className="project-links">
                <Button className="project-button" variant="outline-dark"
                  size="sm"
                  href="https://ies.ed.gov/ncee/edlabs/regions/central/index.asp"
                  target="_blank"
                >
                  Website
                </Button>
                <Link to='/page-2/'>
                <Button className="project-button" variant="outline-dark"
                  size="sm"
                >
                  More
                </Button>
                </Link>
              </Col>
            </Row>
            <Row>
              <Col md={8}>
                <Card.Text className="project-description">
                  Development and management of REL Central portion of the
                  Insitute of Educational Sciences website.
                </Card.Text>
              </Col>
              <Col>
                <Card.Text className="project-type">
                  HTML, CSS, JavaScript
                </Card.Text>
              </Col>
            </Row>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              Active Server Pages Framework • Section 508 & WCAG 2.0 AA
              Accessibility Minimum
            </small>
          </Card.Footer>
        </Card>
        {/* REL Central Design */}
        <Card id={this.state.reldesign} className="project design" data-cat="design">
          <Card.Body className="project-card">
            <Row>
              <Col>
                <Card.Title className="project-title">
                  REL Central Design
                </Card.Title>
              </Col>
              <Col className="project-links">
                <Link to="/page-2/">
                  <Button className="project-button" size="sm" variant="outline-dark">See More</Button>
                </Link>
              </Col>
            </Row>
            <Row>
              <Col md={8}>
                <Card.Text className="project-description">
                  Graphic design work for REL Central of the Insitute of
                  Educational Sciences.
                </Card.Text>
              </Col>
              <Col>
                <Card.Text className="project-type">
                  Report graphics, Infographics, Handouts, etc.
                </Card.Text>
              </Col>
            </Row>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              Adobe CC Suite • Microsoft Office 365 • Section 508 & WCAG
              2.0 AA Accessible Design
            </small>
          </Card.Footer>
        </Card>
        {/* WebAct */}
        <Card id={this.state.webact} className="project dev frontend design" data-cat="dev frontend design">
          <Card.Body className="project-card">
            <Row>
              <Col>
                <Card.Title className="project-title">WebAct</Card.Title>
              </Col>
              <Col className="project-links">
                <Link to="/page-2/">
                  <Button className="project-button" size="sm" variant="outline-dark">See More</Button>
                </Link>
              </Col>
            </Row>
            <Row>
              <Col md={8}>
                <Card.Text className="project-description">
                  Website design agency for small business specializing in
                  SEO and PPC ad campaign management.
                </Card.Text>
              </Col>
              <Col>
                <Card.Text className="project-type">
                  Websites, SEO management, PPC campaigns
                </Card.Text>
              </Col>
            </Row>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              Duda Website Builder • Google Adwords Certified & Google
              Partner • SEO Best Practices
            </small>
          </Card.Footer>
        </Card>
        {/* Karsh Hagan*/}
        <Card id={this.state.karsh} className="project design" data-cat="design">
          <Card.Body className="project-card">
            <Row>
              <Col>
                <Card.Title className="project-title">
                  Karsh Hagan
                </Card.Title>
              </Col>
              <Col className="project-links">
                <Link to="/karsh/">
                  <Button className="project-button" size="sm" variant="outline-dark">See More</Button>
                </Link>
              </Col>
            </Row>
            <Row>
              <Col md={8}>
                <Card.Text className="project-description">
                  UX Design internship mixed with some art direction and
                  graphic design for non-profits.
                </Card.Text>
              </Col>
              <Col>
                <Card.Text className="project-type">
                  UX Design, Graphic Design
                </Card.Text>
              </Col>
            </Row>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              Adobe CC Suite • Sketch • Google Analytics • Storyboarding •
              Journey Mapping • Click Paths • Wireframes
            </small>
          </Card.Footer>
        </Card>
        {/* Personal Design */}
        <Card id={this.state.personal} className="project dev design" data-cat="dev design">
          <Card.Body className="project-card">
            <Row>
              <Col>
                <Card.Title className="project-title">
                  Personal Design
                </Card.Title>
              </Col>
              <Col className="project-links">
                  <Link to="/personal/">
                    <Button className="project-button" size="sm" variant="outline-dark">See More</Button>
                  </Link>
              </Col>
            </Row>
              <Row>
                <Col md={8}>
                  <Card.Text className="project-description">
                    A few of the fun projects I have made, because ... why
                    not!
                  </Card.Text>
                </Col>
                <Col>
                  <Card.Text className="project-type">Personal Design Projects</Card.Text>
                </Col>
              </Row>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              Adobe CC Suite • Figma • Invision Suite • Fun Stuff •
              Getting My Hands Dirty
            </small>
          </Card.Footer>
        </Card>
      </CardDeck>
    )
  }
}

ProjectList.propTypes = {
  siteTitle: PropTypes.string,
}

ProjectList.defaultProps = {
  siteTitle: ``,
}

export default ProjectList
