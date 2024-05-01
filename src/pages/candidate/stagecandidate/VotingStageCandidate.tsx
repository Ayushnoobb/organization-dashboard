import React from "react"
import Navbar from "../../../components/navbar/Navbar"
import DataTable from "../../../components/datatable/Table"
import { stageCandidateData } from "../../../constants/constants"
export const VotingStageCandidate = () => {
  return (
    <>
      <div className="framecontainer">
        <div className="framecontainer-content">
          <div className="dashboard">
            <Navbar name="Voting Stage Candidate" showBars />
          </div>
          <DataTable tableData={stageCandidateData} />
        </div>
      </div>
    </>
  )
}
