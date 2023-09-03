import classes from "./ProjectTile.module.css"
import Image from "./Image"

const ProjectTile = (props) => {
  return (
    <div className={classes.tile}>
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
        <h3 className={classes["project-title"]}>{props.title}</h3>
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
