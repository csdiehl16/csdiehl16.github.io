import ProjectTile from "./ProjectTile"
import "./Projects.css"
import { useState, forwardRef } from "react"
import LazyLoad from "react-lazy-load"
import { projectList } from "./projectList"

const Projects = forwardRef((props, ref) => {
  const [filters, setFilters] = useState({
    type: "All Types",
    language: "All Languages",
  })

  const handleSelect = (event) => {
    const value = event.target.value
    const name = event.target.name

    if (!document.startViewTransition) {
      setFilters({ ...filters, [name]: value })
      return
    }

    document.startViewTransition(() => {
      setFilters({ ...filters, [name]: value })
    })
  }

  const projectsTypeFiltered =
    filters.type === "All Types"
      ? projectList
      : projectList.filter((p) => p.tag.includes(filters.type))

  const projectData =
    filters.language === "All Languages"
      ? projectsTypeFiltered
      : projectsTypeFiltered.filter((p) =>
          p.languages.includes(filters.language)
        )

  const tiles = projectData.map((p) => (
    <ProjectTile
      key={Math.random()}
      tag={p.tag}
      title={p.name}
      link={p.link}
      image={p.imageLink}
      languageTag={p.languages}
    />
  ))

  const types = [
    "All Types",
    "Front-end Development",
    "Data Visualization",
    "Geospatial Analysis",
    "Data Journalism",
    "UI / UX Design",
  ]

  return (
    <div className="fade-in" ref={ref}>
      <div className="project-header">
        <div>
          <div className="types-buttons">
            {types.map((t) => (
              <button
                className={
                  filters.type === t
                    ? "select-button select-button-clicked"
                    : "select-button"
                }
                key={t}
                onClick={handleSelect}
                value={t}
                name="type"
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <LazyLoad>
          <div className="tileContainer">{tiles}</div>
        </LazyLoad>
      </div>
    </div>
  )
})

export default Projects
