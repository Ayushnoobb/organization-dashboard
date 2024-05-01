import { useEffect } from "react"
import Navbar from "../../../components/navbar/Navbar"
import { CampaignStageTable } from "../../../components/campaignstage/CampaignStageTable"
import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../../redux/store"
import { getStageByCampaignId } from "../../../redux/actions/votingCampaign/stageByCampaignId.action"
import { TypedSelector } from "../../../utils/redux.utils"
import { stageByCampaignIdData } from "../../../redux/slices/votingCampaign/stageByCampaignId.slice"
import { xApiKey } from "../../../redux/slices/XapiKey/xApiKey.slice"
import { deleteVCStage } from "../../../redux/slices/votingCampaign/stage/deletVCStageByID.slice"
export const VotingCampaignStage = () => {
  let { id } = useParams()
  const stageData = TypedSelector(stageByCampaignIdData)
  const deleted = TypedSelector(deleteVCStage)
  const xapi = TypedSelector(xApiKey)
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    const pass = {
      campaignId: id as string,
      xApi: xapi.x_api as string
    }
    if (id || deleted.data?.success) {
      dispatch(getStageByCampaignId(pass))
    }
  }, [id, dispatch, deleted])
  return (
    <div className="framecontainer">
      <div className="framecontainer-content">
        <div className="dashboard">
          <Navbar name="Voting Campaign Stage" showBars />
        </div>
        <CampaignStageTable
          campaignDetails={stageData.data}
          isLoading={stageData.isLoading}
        />
      </div>
    </div>
  )
}
