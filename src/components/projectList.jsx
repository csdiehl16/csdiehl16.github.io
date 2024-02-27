import ProjectTile from "./ProjectTile"
import classes from "./ProjectList.module.css"
import { useState, forwardRef } from "react"
import LazyLoad from "react-lazy-load"
import { projectList } from "./projectList"

const ProjectList = forwardRef((props, ref) => {
  const [viewMore, setViewMore] = useState(false)

  const projectsFiltered =
    props.filters === "All"
      ? projectList
      : projectList.filter((p) => p.tag.includes(props.filters))

  const projectData = viewMore ? projectsFiltered : projectsFiltered.slice(0, 5)

  const tiles = projectData.map((p) => (
    <ProjectTile
      key={p.link + p.name}
      tag={p.tag}
      title={p.name}
      link={p.link}
      image={p.imageLink}
      languageTag={p.languages}
      cloudinaryId={p?.cloudinaryId}
      badge={p?.badge}
      description={p.description}
    />
  ))

  return (
    <div className="fade-in" ref={ref}>
      <LazyLoad>
        <div className={classes["tileContainer"]}>{tiles}</div>
      </LazyLoad>
      <button
        onClick={() => setViewMore((p) => !p)}
        className={classes["see-more-button"]}
      >
        <span>{viewMore ? "Hide" : "See more"} projects</span>
        <img
          className={classes[viewMore ? "arrow-clicked" : ""]}
          alt="arrow"
          height="24px"
          width="24px"
          src="./down-arrow.svg"
        ></img>
      </button>
    </div>
  )
})

export default ProjectList
