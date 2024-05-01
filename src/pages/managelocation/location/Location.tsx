import React from "react"
import Navbar from "../../../components/navbar/Navbar"
import DataTable from "../../../components/datatable/Table"

export const Location = () => {
  let tableData = [
    {
      name: "Birmingham",
      city: "London",
      counrtry: "United Kingdom",
    },
    {
      name: "YorkDale",
      city: "Torrento",
      counrtry: "Canada",
    },
  ]
  return (
    <div className="framecontainer">
      <div className="framecontainer-content">
        <div className="dashboard">
          <Navbar name="Location" showBars />
        </div>
        <DataTable tableData={tableData} />
      </div>
    </div>
  )
}
