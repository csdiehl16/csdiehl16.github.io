import classes from "./ProjectTile.module.css";

const ProjectTile = (props) => {
  const clickHandler = () => {
    props.tileClicked(props.title);
  };

  return (
    <div className={classes.tile}>
      <img
        onClick={clickHandler}
        className={classes["tile-img"]}
        src={props.image}
        alt={props.title}
      ></img>
      <div className={classes.tag}>{props.tag}</div>
      {props.languageTag.map((t) => {
        return (
          <div className={classes.languageTag} key={Math.random()}>
            {t}
          </div>
        );
      })}
    </div>
  );
};

export default ProjectTile;
