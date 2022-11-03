import { useState } from "react";
import "./Tooltip.css";

const TooltipHint = (props) => {
  const [showTooltip, setShowToolTip] = useState(false);

  const tooltipHandler = () => {
    if (!showTooltip) {
      setShowToolTip(true);
    } else {
      setShowToolTip(false);
    }
  };

  return (
    <button className="tooltip" onClick={tooltipHandler}>
      Hint <i class="bi bi-lightbulb"></i>
      <span className={`${showTooltip && "show"} tooltiptext`}>
        This is a hint text
      </span>
    </button>
  );
};

export default TooltipHint;
