import "./Modal.css";
import React from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onHideMap}></div>;
};

const ModalOverLay = (props) => {
  return (
    <div className="modal-main">
      <div className="content">{props.children}</div>
    </div>
  );
};

// portal a component to a selected div outside of root used for overlays like modals

// target element in index.html to portal too
const portalElement = document.querySelector("#overlay");

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onHideMap={props.onHideMap} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <div className="d-flex justify-content-center">
          <ModalOverLay>{props.children}</ModalOverLay>{" "}
        </div>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
