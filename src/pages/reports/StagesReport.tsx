import React, { useEffect, useRef } from "react"
import Navbar from "../../components/navbar/Navbar"
import Performance from "../../components/performance/Performance"
import { useParams } from "react-router-dom"
import { useAppDispatch } from "../../utils/redux.utils"
import { getStageByCampaignId } from "../../redux/actions/votingCampaign/stageByCampaignId.action"
import { useSelector } from "react-redux"
import { RootStore } from "../../redux/store"
import StagePerformance from "../../components/performance/StagePerformance"

export const StageReport = () => {
  let { id } = useParams()
  return (
    <div className="framecontainer">
      <div className="framecontainer-content">
        <div className="dashboard">
          <Navbar name="Report" showBars />
          <StagePerformance title="stages" />
        </div>
      </div>
    </div>
  )
}
