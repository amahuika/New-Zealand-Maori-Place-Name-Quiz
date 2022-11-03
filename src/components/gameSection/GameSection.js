import "./GameSection.css";
import Select from "react-select";
import TooltipHint from "./TooltipHint";

const GameSection = (props) => {
  return (
    <div className="section">
      <div className="select-div">
        <div className="place-name">
          <div className="title">
            <span>the place name</span>
          </div>
          <div className="location">
            <span>
              <i class="bi bi-pin-map"></i>
            </span>
          </div>
        </div>

        <div className="tooltip-btn">
          <TooltipHint />
        </div>
      </div>
      <div className="select-div">
        <Select />
      </div>
    </div>
  );
};

export default GameSection;
