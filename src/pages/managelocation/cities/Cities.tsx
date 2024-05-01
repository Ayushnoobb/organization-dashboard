import React from "react"
import Navbar from "../../../components/navbar/Navbar"
import DataTable from "../../../components/datatable/Table"

export const Cities = () => {
  let tableData = [
    {
      name: "Bhaktapur",
      counrtry: "Nepal",
      location: "1",
      isPopular: "yes",
    },
    {
      name: "New York",
      counrtry: "United States",
      location: "0",
      isPopular: "No",
    },
  ]
  return (
    <div className="framecontainer">
      <div className="framecontainer-content">
        <div className="dashboard">
          <Navbar name="Cities" showBars />
        </div>
        <DataTable tableData={tableData} />
      </div>
    </div>
  )
}
