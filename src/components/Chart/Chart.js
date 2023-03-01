import React from "react";
import PropTypes from "prop-types";
import ChartBar from "./ChartBar";
import "./chart.css";

export default function Chart({ dataPoints }) {
    const dataPointsValues = dataPoints.map((dataPoint) => dataPoint.value);
    const totalMaximum = Math.max(...dataPointsValues);
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

Chart.propTypes = {
  dataPoints: PropTypes.arrayOf(PropTypes.object).isRequired,
};
