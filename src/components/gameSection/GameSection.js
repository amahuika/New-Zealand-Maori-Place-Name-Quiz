import "./GameSection.css";
import Select from "react-select";
import TooltipHint from "./TooltipHint";
import Swal from "sweetalert2";
import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

const GameSection = (props) => {
  // select change handler
  const changeHandle = (e) => {
    if (e.value === props.placeNameData.answer) {
      Swal.fire({
        title: "Correct!",
        icon: "success",
        showConfirmButton: false,
        timer: 1100,
      });
      props.answerHandler("correct", e.value);
    } else {
      Swal.fire({
        title: "Try again!",
        icon: "error",
        showConfirmButton: false,
        timer: 1100,
      });
      props.answerHandler("incorrect", e.value);
    }
  };

  return (
    <div className="row mb-3 justify-content-center">
      <div className="col-6 col-md-5">
        <Card class="name-holder">
          {props.placeNameData.name === ""
            ? "Click generate"
            : props.placeNameData.name}
        </Card>
        <div className="row mt-1">
          <div className="col-8">
            <Button onClickHandle={props.onShowMap} class="btn-danger btn-sm">
              <span className="hide-on-small">Show on map </span>
              <i className="bi bi-geo-alt-fill"></i>
            </Button>
          </div>
          <div className="col-4 ps-0 d-flex justify-content-end">
            <TooltipHint hint={props.placeNameData.hint} />
          </div>
        </div>
      </div>
      <div className="col-6 col-md-5">
        <Select
          value={null}
          placeholder={props.isCorrectAnswer ? "Well Done!" : "Options..."}
          onChange={changeHandle}
          options={props.options}
          isSearchable={false}
          theme={(theme) => ({
            ...theme,
            borderRadius: 6,
          })}
          isDisabled={props.isCorrectAnswer ? true : false}
        />
      </div>
    </div>
  );
};

export default GameSection;
