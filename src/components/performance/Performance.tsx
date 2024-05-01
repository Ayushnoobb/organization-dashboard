import React, { useEffect, useRef } from "react"
import ContestantCard from "../../ui/contestantcard/ContestantCard"
import { useParams } from "react-router-dom"
import PrevBtn from "../../ui/prevbutton/BackBtn"
import { useSelector } from "react-redux"
import { RootStore } from "../../redux/store"
import { useAppDispatch } from "../../utils/redux.utils"
import { getVotingCampaign } from "../../redux/actions/votingCampaign/votingCamp.action"

const Performance = ({ title }: { title: any }) => {
  let { id, csid } = useParams()
  const dispatch = useAppDispatch()
  const didMount = useRef<boolean>(false)

  const { data } = useSelector((state : RootStore) =>state.votingCampaign)
  const votingCampaignData = data?.data?.rows
  
  useEffect(() =>{
    if(!didMount.current){
      if(!data){
        dispatch(getVotingCampaign());
      }
    }
  },[])
  
  return (
    <div className="performance-wrapper">
      <div className="performance-top">
        <PrevBtn />
        <h1>Performance - {title}</h1>
      </div>
      <div className="candidate-container">
        <div className="card-wrapper">
          {
            votingCampaignData && votingCampaignData?.map((data) => {
              return (
                <ContestantCard
                  profile={data.logo}
                  title={data.title}
                  id={data.id}
                  key={data.id}
                />
              )
            })}
            {
              (votingCampaignData?.length === 0) && <p> No Stages to display</p>
            }
        </div>
      </div>
    </div>
  )
}

export default Performance
