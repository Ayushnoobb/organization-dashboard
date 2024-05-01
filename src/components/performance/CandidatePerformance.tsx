import React, { useEffect, useRef } from "react"
import ContestantCard from "../../ui/contestantcard/ContestantCard"
import { useParams } from "react-router-dom"
import PrevBtn from "../../ui/prevbutton/BackBtn"
import {useSelector } from "react-redux"
import { RootStore } from "../../redux/store"
import { useAppDispatch } from "../../utils/redux.utils"
import { dataService } from "../../utils/axios"
import { GetVotingAggregatorThunk } from "../../redux/actions/votingAggregator/votingAggrgator.actions"

const CandidatePerformance = ({ title }: { title: any }) => {
  const { csid } = useParams()
  const { x_api} = useSelector((state :RootStore) => state.x_api_key)
  const  { data } = useSelector((state : RootStore) => state.login)
  const { votingAggregatorData  } = useSelector((state : RootStore) => state.voting_aggregator)
  const dispatch = useAppDispatch()
  const didMount = useRef<boolean>(false);

  useEffect(() =>{
    if(!didMount.current){
      didMount.current = true
      if(!votingAggregatorData) {
        dataService.setApiKey(x_api!)
        dataService.setToken(data.token!)
        dispatch(GetVotingAggregatorThunk(csid!))
      }
    }
  },[csid , dispatch])
  return (
    <div className="performance-wrapper">
      <div className="performance-top">
        <PrevBtn />
        <h1>Performance - {title}</h1>
      </div>
      <div className="candidate-container">
        <div className="card-wrapper">
          {
            votingAggregatorData && votingAggregatorData
              .map((data) => {
                return (
                  <ContestantCard
                    profile={data.candidate.profilePicture}
                    name={data.candidate.name}
                    candidateid={data.candidate.id}
                    votes={data.votes}
                  />
                )
              })
            }
        </div>
      </div>
    </div>
  )
}

export default CandidatePerformance
