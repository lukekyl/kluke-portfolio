// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"

import ProjectButtons from './project-buttons'
import ProjectList from "./project-list"

class ProjectGrid extends Component {
  render() {
    return (
      <div className="project-grid">
        <ProjectButtons />
        <ProjectList page={this.props.page} />
      </div>
    )
  }
}

ProjectGrid.propTypes = {
  siteTitle: PropTypes.string,
}

ProjectGrid.defaultProps = {
  siteTitle: ``,
}

export default ProjectGrid
