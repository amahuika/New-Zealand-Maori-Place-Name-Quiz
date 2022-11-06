import React from "react";
import ReactTooltip from "react-tooltip";

const TooltipHint = (props) => {
  return (
    <React.Fragment>
      <span
        className="btn btn-warning btn-sm text-light"
        data-tip={`Hint: ${props.hint}`}
        data-event="click focus"
      >
        <span className="hide-on-small">Hint</span>{" "}
        <i className="bi bi-lightbulb"></i>
      </span>
      <ReactTooltip globalEventOff="click" />
    </React.Fragment>
  );
};

export default TooltipHint;
