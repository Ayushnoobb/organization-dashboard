import React, { useEffect, useRef } from "react"
import ContestantCard from "../../ui/contestantcard/ContestantCard"
import { useParams } from "react-router-dom"
import PrevBtn from "../../ui/prevbutton/BackBtn"
import { useSelector } from "react-redux"
import { RootStore } from "../../redux/store"
import { TypedSelector, useAppDispatch } from "../../utils/redux.utils"
import { getVotingCampaign } from "../../redux/actions/votingCampaign/votingCamp.action"
import { getStageByCampaignId } from "../../redux/actions/votingCampaign/stageByCampaignId.action"
import { xApiKey } from "../../redux/slices/XapiKey/xApiKey.slice"

const StagePerformance = ({ title }: { title: any }) => {
  let { id } = useParams()
  const didMount = useRef<boolean>(false)
  const xapi = TypedSelector(xApiKey)
  const dispatch = useAppDispatch()
  const { data} = useSelector((state : RootStore) => state.stageByCampaginId)
  const VotingCamapignStageData = data?.data?.rows
  console.log(data)

  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true
      const pass = {
        campaignId: id as string,
        xApi: xapi.x_api as string
      }
      dispatch(getStageByCampaignId(pass))
    }
  }, [])
  return (
    <div className="performance-wrapper">
      <div className="performance-top">
        <PrevBtn />
        <h1>Performance -{title}</h1>
      </div>
      <div className="candidate-container">
        <div className="card-wrapper">
          {VotingCamapignStageData &&
            VotingCamapignStageData
              .map((data , index) => {
                return (
                  <ContestantCard
                    key={index}
                    profile={
                      data.logo
                    }
                    title={data.title}
                    id={data.id}
                  />
                )
              })}
        </div>
      </div>
    </div>
  )
}

export default StagePerformance
