import classes from "./Modal.module.css";
import { Fragment } from "react";

const Modal = (props) => {
  let images;
  if (props.tileInfo.otherImages) {
    images = props.tileInfo.otherImages.map((i) => (
      <img className={classes["proj-image"]} alt={i} key={i} src={i}></img>
    ));
  }

  return (
    <Fragment>
      <div
        className={classes.modalbackground}
        onClick={props.closeHandler}
      ></div>
      <div
        className={
          props.open
            ? `${classes.modal} ${classes.modalOpen}`
            : `${classes.modal} ${classes.modalClosed}`
        }
      >
        <h2>{props.tileInfo.name}</h2>
        <div className={classes.header}>
          <img
            className={classes["modal-image"]}
            src={props.tileInfo.imageLink}
            alt={props.tileInfo.imageLink}
          />
          <div>
            <a href={props.tileInfo.link} target="_blank">
              View Project
            </a>
            <p>{props.tileInfo.description}</p>
          </div>
        </div>

        <div className={classes.imageGrid}>{images}</div>
      </div>
    </Fragment>
  );
};

export default Modal;
