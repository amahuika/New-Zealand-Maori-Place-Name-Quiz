import classes from "./Modal.module.css";
import React from "react";
import ReactDOM from "react-dom";

function Backdrop(props) {
  return <div className={classes.backdrop} onClick={props.onHideMap}></div>;
}

function ModalOverLay(props) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
}

// portal a component to a selected div outside of root used for overlays like modals

// target element in index.html to portal too
const portalElement = document.querySelector("#overlay");

function Modal(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onHideMap={props.onHideMap} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverLay>{props.children}</ModalOverLay>,
        portalElement
      )}
    </React.Fragment>
  );
}

export default Modal;
