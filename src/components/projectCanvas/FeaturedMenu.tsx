import React from "react"
import { projectData } from "./projectData"

const featuredProjects = projectData.filter((d) => d.featured)

const FeaturedMenu = () => {
  return (
    <div className="featured-projects">
      <p className="featured-header">Featured Projects</p>
      {featuredProjects.map((proj) => {
        return <a className="featured">{proj.name}</a>
      })}
    </div>
  )
}

export default FeaturedMenu
