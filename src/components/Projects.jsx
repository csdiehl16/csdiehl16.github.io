import ProjectList from "./ProjectList"
import { useState, useRef } from "react"
import classes from "./Projects.module.css"

const projectTypes = [
  "All",
  "Geospatial",
  "Dashboards",
  "Data journalism",
  "Web development",
]

function Projects() {
  const [filters, setFilters] = useState("All")

  const projectsRef = useRef()

  return (
    <div className={classes["App"]} style={{ width: "100%" }}>
      <div className={classes["nav-bar"]}>
        {projectTypes.map((d) => (
          <button
            onClick={() => setFilters(d)}
            className={`${classes["nav-btn"]} ${classes[filters === d ? "nav-btn-clicked" : "project-button"]}`}
            key={d}
          >
            {d}
          </button>
        ))}
      </div>
      <div className={classes["nav-line"]}>
        <div className={classes["nav-highlight"]}></div>
      </div>
      <ProjectList filters={filters} ref={projectsRef} />
    </div>
  )
}

export default Projects
