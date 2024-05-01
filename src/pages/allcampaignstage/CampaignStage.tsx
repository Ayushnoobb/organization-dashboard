import Navbar from "../../components/navbar/Navbar"
import {
  campaignStageData,
  votingCampaignData,
} from "../../constants/constants"
import { CampaignStageTable } from "../../components/campaignstage/CampaignStageTable"
export const AllCampaignStage = () => {
  return (
    <div className="framecontainer">
      <div className="framecontainer-content">
        <div className="dashboard">
          <Navbar name="Campaign Stages" showBars />
        </div>
        {/* {votingCampaignData?.map((vcdata, index) => {
          return (
            <CampaignStageTable
              key={JSON.stringify(index)}
              campaignDets={campaignStageData}
            />
          )
        })} */}
      </div>
    </div>
  )
}
