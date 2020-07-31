// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Row, Col, Button } from "react-bootstrap"

const ProjectButtons = () => (
    <Row>
            <Col lg={3}>
            <h2 id="selected-projects">Selected Projects</h2>
            </Col>
            <Col lg={9}>
            <ul className="filters">
              <li>
                <Button variant="light" size="sm" className="filter" data-filter=".dev, .frontend, .backend, .js, .react, .rails, .design" >
                  All
                </Button>
              </li>
              <li>
                <Button variant="light" size="sm" className="filter" data-filter=".dev" >
                  Development
                </Button>
              </li>
              <li>
                <Button variant="light" size="sm" className="filter" data-filter=".frontend" >
                  Frontend
                </Button>
              </li>
              <li>
                <Button variant="light" size="sm" className="filter" data-filter=".backend" >
                  Backend
                </Button>
              </li>
              <li>
                <Button variant="light" size="sm" className="filter" data-filter=".js"
                >
                  JavaScript
                </Button>
              </li>
              <li>
                <Button variant="light" size="sm" className="filter" data-filter=".react" >
                  React
                </Button>
              </li>
              <li>
                <Button variant="light" size="sm" className="filter" data-filter=".rails" >
                  Rails
                </Button>
              </li>
              <li>
                <Button variant="light" size="sm" className="filter" data-filter=".design" >
                  Design
                </Button>
              </li>
            </ul>
            </Col>
          </Row>
)

ProjectButtons.propTypes = {
  siteTitle: PropTypes.string,
}

ProjectButtons.defaultProps = {
  siteTitle: ``,
}

export default ProjectButtons
