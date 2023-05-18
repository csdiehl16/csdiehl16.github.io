import classes from "./ProjectTile.module.css"

const ProjectTile = (props) => {
  return (
    <div className={classes.tile}>
      <a href={props.link}>
        <img
          className={classes["tile-img"]}
          src={props.image}
          alt={props.title}
        ></img>
        <h3 className={classes["project-title"]}>{props.title}</h3>
      </a>
    </div>
  )
}

export default ProjectTile
