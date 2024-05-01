/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react"
import { CandidateTable } from "../../../components/candidate/CandidateTable"
import { candidateData } from "../../../constants/constants"
import Navbar from "../../../components/navbar/Navbar"
import { useNavigate, useParams } from "react-router-dom"
import { StageCandidateTable } from "../../../components/stagecandidate/StageCandidateTable"

// 
import { useSelector } from "react-redux"
import { RootStore } from "../../../redux/store"
import { useAppDispatch } from "../../../utils/redux.utils"
import { GetAllCandidateByVotingCampaignIdThunk } from "../../../redux/actions/candidates/getAllCandidatesByVotingCampaignId.actions"
import { dataService } from "../../../utils/axios"


export const CampaignCandidate: React.FC = () => {
  const { id, csid } = useParams();
  const navigate = useNavigate()
  console.log(id)
  const didMount = useRef<boolean>(false);
  const dispatch = useAppDispatch();

  const { data } = useSelector((state: RootStore) => state.get_all_candidates_by_campaign_id);
  const { x_api } = useSelector((state: RootStore) => state.x_api_key);


  useEffect(() => {
    if (!didMount.current) {
      didMount.current = false
      if (!id) navigate('/votingcampaign');
      dataService.setApiKey(x_api!)
      dispatch(GetAllCandidateByVotingCampaignIdThunk(id!.split('&').at(0)!))
    }
  }, [id])
  return (
    <div className="framecontainer">
      <div className="framecontainer-content">
        <div className="dashboard">
          <Navbar name="Candidate" showBars />
        </div>
        {csid ? (
          <StageCandidateTable
            candidateDets={candidateData}
            campaignid={id}
            campaignstageid={csid}
          />
        ) : (
          <CandidateTable candidate={data} campaignid={id!} />
        )}
      </div>
    </div>
  )
}
