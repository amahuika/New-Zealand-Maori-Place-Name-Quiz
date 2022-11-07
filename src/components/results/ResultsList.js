import React from "react";

const ResultsList = (props) => {
  return (
    <React.Fragment>
      <li className="list-group-item">{props.listItem}</li>
      <hr className="my-2" />
    </React.Fragment>
  );
};

export default ResultsList;
