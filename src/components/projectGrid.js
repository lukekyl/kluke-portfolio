// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import ProjectButtons from './project-buttons'
import ProjectList from "./project-list"

const ProjectGrid = () => (
  <div className="project-grid">
    <ProjectButtons />
    <ProjectList />
  </div>
)

ProjectGrid.propTypes = {
  siteTitle: PropTypes.string,
}

ProjectGrid.defaultProps = {
  siteTitle: ``,
}

export default ProjectGrid
