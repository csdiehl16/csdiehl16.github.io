import classes from "./Modal.module.css";
import { Fragment } from "react";

const Modal = (props) => {
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
        <img
          className={classes["modal-image"]}
          src={props.tileInfo.imageLink}
          alt={props.tileInfo.imageLink}
        />
      </div>
    </Fragment>
  );
};

export default Modal;
