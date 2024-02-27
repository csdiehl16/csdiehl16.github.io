import "./Projects.css"
import ProjectList from "./ProjectList"
import { useState, useRef } from "react"

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
    <div className="App" style={{ width: "100%" }}>
      <div className="nav-bar">
        {projectTypes.map((d) => (
          <button
            onClick={() => setFilters(d)}
            className={
              filters === d
                ? "nav-btn nav-btn-clicked"
                : "nav-btn project-button"
            }
            key={d}
          >
            {d}
          </button>
        ))}
      </div>
      <div className="nav-line">
        <div className="nav-highlight"></div>
      </div>
      <ProjectList filters={filters} ref={projectsRef} />
    </div>
  )
}

export default Projects
