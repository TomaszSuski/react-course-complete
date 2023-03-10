import React from "react";
import PropTypes from "prop-types";
import "./chartBar.css";

export default function ChartBar({ value, maxValue, label }) {
  let barFillHeight = "0%";
  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{height: barFillHeight}}></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
}

ChartBar.propTypes = {
  value: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};
