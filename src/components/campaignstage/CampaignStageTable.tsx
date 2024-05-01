import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import TableTop from "../tabletop/Tabletop"
import { StageByCampaignIdInterface } from "../../redux/slices/interface/stageByCampaignId.interface"
import DateCountdown from "../../ui/daysleft/DaysCountDown"
import { S3_URL } from "../../constants/constants"
import { TypedSelector, useAppDispatch } from "../../utils/redux.utils"
import { loginData } from "../../redux/slices/login/login.slices"
import { xApiKey } from "../../redux/slices/XapiKey/xApiKey.slice"
import { deleteCStageById } from "../../redux/actions/votingCampaign/stages/deleteCStageById.action"
import { deleteVCStage, resetDeleteState } from "../../redux/slices/votingCampaign/stage/deletVCStageByID.slice"
import { Toaster } from "react-hot-toast"
import { toast } from "react-toastify"
interface CampaignStagedProps {
  campaignDetails: StageByCampaignIdInterface | null
  isLoading: boolean
}
export const CampaignStageTable: React.FC<CampaignStagedProps> = ({
  campaignDetails,
  isLoading
}) => {
  const loginInfo = TypedSelector(loginData)
  const deleted = TypedSelector(deleteVCStage)
  const xapi = TypedSelector(xApiKey)
  const dispatch = useAppDispatch()
  const handleCampaignStage = (stageId: string) => {
    const Args = {
      id: stageId,
      xApi: xapi.x_api as string,
      authToken: loginInfo.data.token as string
    }
    dispatch(deleteCStageById(Args))
  }
  useEffect(() => {
    if (deleted.data?.success)
      toast.success("deleted")
    dispatch(resetDeleteState())
    // reset here
  }, [deleted])
  return (
    <>
      <TableTop />
      <div className="table-wrapper">
        <Toaster />
        <table className="table-wrapper-table rounded-lg overflow-hidden border">
          <thead>
            <tr>
              <th rowSpan={2}>SN</th>
              <th rowSpan={2}>Logo</th>
              <th rowSpan={2}>title</th>
              <th colSpan={2}>Limit</th>
              <th rowSpan={2}>TimeLine</th>
              <th rowSpan={2}>Candiates</th>
              <th rowSpan={2}>Action</th>
            </tr>
            <tr>
              <th>Email</th>
              <th className="border border-[#525050]">Sms</th>
            </tr>
          </thead>
          {!isLoading ?
            <tbody className="table-body">
              {campaignDetails ? (
                campaignDetails?.data.rows.map((currentRow, index) => {
                  return (
                    <tr key={currentRow.id} className="cursor-pointer">
                      <td className="sn">{index + 1}</td>
                      <td className="image ">
                        <img
                          src={S3_URL.concat(currentRow.logo)}
                          alt={currentRow.title}
                        />
                      </td>
                      <td>{currentRow.title}</td>
                      <td>{currentRow.emailVotingLimit}</td>
                      <td>{currentRow.smsVotingLimit}</td>
                      <td>
                        <DateCountdown
                          startDate={currentRow.startDateTime}
                          endDate={currentRow.endDateTime}
                        />
                      </td>
                      <td className="managecandidate">
                        more...
                      </td>
                      <td className="action">
                        <Link to={`edit/${currentRow.id}`} state={{ current: currentRow }}>
                          <button className="bttn edit-btn">Edit</button>
                        </Link>
                        <button className="bttn delete-btn"
                          onClick={() => handleCampaignStage(currentRow.id)}
                        >Delete</button>
                      </td>
                    </tr>
                  )
                })
              ) : (
                <h1>Data not found</h1>
              )}
            </tbody> :
            <h1>Loading</h1>
          }
        </table>
      </div>
    </>
  )
}
