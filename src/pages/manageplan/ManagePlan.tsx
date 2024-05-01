import React from "react"
import Navbar from "../../components/navbar/Navbar"
import PlanBox from "../../components/planbox/PlanBox"

export const ManagePlan = () => {
  let planDets = [
    {
      toptitle: "Trial Plan",
      topdesc: "this is a trail for a 10 days",
      prevPrice: "0",
      currentPrice: "0",
      timelimit: "10 days",
      plansList: ["Chat tags", "Chat note", "Auto chatbox", "Cloud API"],
    },
    {
      toptitle: "Basic",
      topdesc: "this is a trail for a short period 30 days",
      prevPrice: "39",
      currentPrice: "29",
      timelimit: "30 days",
      plansList: ["Chat tags", "Chat note", "Auto chatbox", "Cloud API"],
    },
    {
      toptitle: "Premium",
      topdesc: "this is a trail for a short period 30 days",
      prevPrice: "199",
      currentPrice: "99",
      timelimit: "30 days",
      plansList: ["Chat tags", "Chat note", "Auto chatbox", "Cloud API"],
    },
  ]
  return (
    <div className="framecontainer">
      <div className="framecontainer-content">
        <div className="dashboard">
          <Navbar name="Manage Plan" showBars />
        </div>
        <div className="plans">
          {planDets.map((boxDets, index) => {
            return <PlanBox key={index} dets={boxDets} />
          })}
        </div>
      </div>
    </div>
  )
}
