import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  let barFilHeight = '0%';
  if (props.maxvalue > 0) {
    barFilHeight = Math.round((props.value / props.maxvalue) * 100) + '%';
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barFilHeight }}></div>
      </div>
      <div className="chary-bar__label">{props.label}</div>
    </div>
  );
};
export default ChartBar;
