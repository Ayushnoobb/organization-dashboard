import React from "react"
import Navbar from "../../components/navbar/Navbar"
import { useParams } from "react-router-dom"
import CandidatePerformance from "../../components/performance/CandidatePerformance"

export const CandidateReport : React.FC = () => {
  let { csid } = useParams()
  return (
    <div className="framecontainer">
      <div className="framecontainer-content">
        <div className="dashboard">
          <Navbar name="Report" showBars />
          <CandidatePerformance title='candidate' />
          {/* <Performance title="candidate" /> */}
          {/*  */}
        </div>
      </div>
    </div>
  )
}
