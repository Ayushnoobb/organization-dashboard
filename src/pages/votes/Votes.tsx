import React from "react"
import Navbar from "../../components/navbar/Navbar"
import { voteData } from "../../constants/constants"
import PrevBtn from "../../ui/prevbutton/BackBtn"

export const Votes = () => {
  return (
    <div className="framecontainer">
      <div className="framecontainer-content">
        <div className="dashboard">
          <Navbar name="Votes" showBars />

          <PrevBtn />
          <div className="table-wrapper">
            <table className="table-wrapper-table" border={0}>
              <thead>
                <tr>
                  <th>SN</th>
                  <th>id</th>
                  <th>method</th>
                  <th>device</th>
                  <th>ipAddress</th>
                  <th>phone</th>
                  <th>StageId</th>
                  <th>candidateId</th>
                  <th>couponId</th>
                  <th>Action</th>

                  {/* <th>SN</th>
                            {
                                Object.keys(campaignDets[0]).map((col, index) => {
                                    return (<th key={index}>{col}</th>)
                                })
                            }
                            <th>Action</th> */}
                </tr>
              </thead>

              <tbody className="table-body">
                {voteData && voteData.length !== 0 ? (
                  voteData.map((data: any, index) => {
                    return (
                      <tr key={index}>
                        <td className="sn">{index + 1}</td>
                        <td>{data.id}</td>
                        <td>{data.method}</td>
                        <td>{data.deviceDetail}</td>
                        <td>{data.ipAddress}</td>
                        <td>{data.phoneNumber}</td>
                        <td>{data.votingCampaignStageId}</td>
                        <td>{data.candidateId}</td>
                        <td>{data.couponId}</td>
                        <td className="action">
                          <button className="bttn delete-btn">Delete</button>
                        </td>
                      </tr>
                    )
                  })
                ) : (
                  <tr>
                    <td colSpan={12} className="notfound">
                      Data not found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
