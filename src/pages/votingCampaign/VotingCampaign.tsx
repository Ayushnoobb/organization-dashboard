import React, { useEffect } from "react"
import Navbar from "../../components/navbar/Navbar"
import { Link } from "react-router-dom"
import { S3_URL, votingcampaignTableHeading } from "../../constants/constants"
import TableTop from "../../components/tabletop/Tabletop"
import { TypedSelector, useAppDispatch } from "../../utils/redux.utils"
import { votingCampaignDatas } from "../../redux/slices/votingCampaign/votingCamp.slice"
import { getVotingCampaign } from "../../redux/actions/votingCampaign/votingCamp.action"
import DateCountdown from "../../ui/daysleft/DaysCountDown"
import { deleteCampaignById } from "../../redux/actions/votingCampaign/deleteCampaignbyId.action"
import { loginData } from "../../redux/slices/login/login.slices"
import { xApiKey } from "../../redux/slices/XapiKey/xApiKey.slice"
// import 'react-tooltip/dist/react-tooltip.css'
// import { Tooltip } from 'react-tooltip'
import Tippy from "@tippyjs/react"
import { Edit } from "lucide-react"
import toast, { Toaster } from "react-hot-toast"
export const VotingCampaign = () => {
  const dispatch = useAppDispatch()
  const votingData = TypedSelector(votingCampaignDatas)
  const loginInfo = TypedSelector(loginData)
  const xapiKey = TypedSelector(xApiKey)
  const handleCampaignDelete = (id: string) => {
    const Args = {
      id: id,
      xApi: xapiKey?.x_api as string,
      authToken: loginInfo?.data.token as string
    }
    dispatch(deleteCampaignById(Args))
  }
  useEffect(() => {
    dispatch(getVotingCampaign())
  }, [])

  return (
    <div className="framecontainer select-none">
      <Toaster />
      <div className="framecontainer-content">
        <div className="dashboard">
          <Navbar name="Voting Campaign" showBars />
        </div>
        <TableTop />
        <div className="table-wrapper">
          {votingData?.data?.data.rows.length !== 0 ? (
            <table
              className="table-wrapper-table rounded-lg overflow-hidden border"
              border={0}
            >
              <thead>
                <tr className=" tracking-wide">
                  {votingcampaignTableHeading.map((heading, index) => (
                    <th key={JSON.stringify(index)}>{heading.name}</th>
                  ))}
                </tr>
              </thead>
              {!votingData.isLoading ?
                <tbody className="table-body">
                  {votingData?.data?.data.rows.map((campaign, index) => (
                    <tr
                      key={JSON.stringify(index)}
                      className="cursor-pointer hover:bg-[#0b005a19] duration-150"
                    >
                      <td className="sn">{index + 1}</td>
                      {/** update logo */}
                      {/* <Tippy content={<span className="px-10 bg-black text-white duration-0 absolute rounded-lg">Update</span>}> */}
                      <td className="image relative">
                        {/* <Edit size={13} className="absolute right-2 top-1" onClick={() => {
                          toast.success(campaign.title)
                        }} /> */}
                        <img src={S3_URL.concat(campaign.logo)} alt="pic" />
                      </td>
                      {/* </Tippy> */}
                      <td>{campaign.title}</td>

                      <td className="managecandidate">
                        <Link
                          to={`/votingcampaign/campaigncandidate/${campaign.id}&vc=${campaign.title}`}
                        >
                          more...
                        </Link>
                      </td>
                      <td className="managecandidate">
                        <Link
                          to={`/votingcampaign/votingcampaignstage/${campaign.id}`}
                        >
                          more...
                        </Link>
                      </td>
                      <td className="managecandidate">
                        <Link to={`/votingcampaign/coupan/${campaign.id}`}>
                          more...
                        </Link>
                      </td>
                      <td>
                        <DateCountdown
                          startDate={campaign.startDateTime}
                          endDate={campaign.endDateTime}
                        />
                      </td>
                      <td>{campaign.timeZone}</td>
                      <td className="action">
                        <Link to={`edit/${campaign.id}`} state={{ campaign }}>
                          <button className="bttn edit-btn">Edit</button>
                        </Link>
                        <button
                          className="bttn delete-btn"
                          onClick={() => handleCampaignDelete(campaign.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody> :
                <div className="w-full h-10 flex items-center justify-center">
                  <h1>Loading...</h1>
                </div>
              }
            </table>
          ) : (
            <h1>Nothing to show</h1>
          )}
        </div>
      </div>
    </div>
  )
}
