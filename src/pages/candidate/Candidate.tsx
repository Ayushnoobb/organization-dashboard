import React  from "react"
import Navbar from "../../components/navbar/Navbar"
import { candidateData, votingCampaignData } from "../../constants/constants"
// import { CandidateTable } from "../../components/candidate/CandidateTable"
export const Candidate : React.FC = () => {

  return (
    <div className="framecontainer">
      <div className="framecontainer-content">
        <div className="dashboard">
          <Navbar name="Candidates" showBars />
        </div>
        Hault
        {/* {votingCampaignData?.map((vcdata, index) => {
          return (
            <CandidateTable
              candidate={candidateData}
              campaignid={vcdata.id}
              key={index}
            />
          )
        })} */}
      </div>
    </div>
  )
}
