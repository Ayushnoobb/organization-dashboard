import React from "react"
import LineC from "./Line"
import BarC from "./Bar"
import PieC2 from "./Pie2"

const Charts = () => {
  return (
    <div className="charts-container">
      <div className="chart chart-1">
        <h4 className="chart-title">Title</h4>
        <BarC />
      </div>

      <div className="chart chart-2">
        <h4 className="chart-title">Title</h4>
        <LineC />
      </div>
      <div className="chart chart-3">
        <h4 className="chart-title">Title</h4>
        <PieC2 />
      </div>
    </div>
  )
}

export default Charts
