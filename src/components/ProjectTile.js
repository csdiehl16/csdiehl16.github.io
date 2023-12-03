import classes from "./ProjectTile.module.css"
import Image from "./Image"

const ProjectTile = (props) => {
  return (
    <div className={classes.tile}>
      <div>
        <h2 className={classes["project-title"]}>{props.title}</h2>
        <p className={classes["description"]}>{props.description}</p>
        <p className={classes["language-tag"]}>
          {props.languageTag.join(" / ")}
        </p>
        <a className={classes["project-link"]} href={props.link}>
          <span>View Project</span>
          <img src="./arrow-right.svg"></img>
        </a>
      </div>
      <a href={props.link}>
        {props?.cloudinaryId ? (
          <Image classes={classes["tile-img"]} tag={props.cloudinaryId} />
        ) : (
          <img
            className={classes["tile-img"]}
            src={props.image}
            alt={props.title}
          ></img>
        )}
      </a>
      {props.badge && (
        <img
          className={classes["badge"]}
          alt="information is beautiful awards badge"
          src={props.badge}
        ></img>
      )}
    </div>
  )
}

export default ProjectTile
