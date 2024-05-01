/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react"
import { useNavigate, Link } from "react-router-dom"
import {
  BsFacebook,
  BsFillArrowLeftSquareFill,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs"
import { campaignStageData } from "../../constants/constants"
import CandidateModal from "../../ui/selectmodal/SelectModal"

export const StageCandidateTable : React.FC<{
  candidateDets: any
  campaignid: any
  campaignstageid: any
}> = ({
  candidateDets,
  campaignid,
  campaignstageid,
}) => {
  const navigate = useNavigate()

  return (
    <>
      {campaignStageData
        .filter((data) => {
          return data.votingCampaignId === campaignid
        })
        .filter((vcsdata) => {
          return vcsdata.id === campaignstageid
        })
        .map((item, index) => {
          return (
            <h1 key={index} className="vcdata-title">
              {" "}
              <span>
                {item.title}-{campaignstageid}{" "}
              </span>{" "}
            </h1>
          )
        })}

      <div className="table-wrapper-top">
        <Link
          to={".."}
          onClick={(e) => {
            e.preventDefault()
            navigate(-1)
          }}
        >
          <BsFillArrowLeftSquareFill className="icon" />
        </Link>
        <CandidateModal
          votingCampaignId={campaignid}
          campaignstageid={campaignstageid}
        />
      </div>

      <div className="table-wrapper">
        <table
          className="table-wrapper-table border rounded-lg overflow-hidden "
          border={0}
        >
          <thead>
            <tr>
              <th>SN</th>
              <th>name</th>
              <th>age</th>
              <th>gender</th>
              <th>nationality</th>
              <th>weight</th>
              <th>city</th>
              <th>profilePicture</th>
              <th>Social</th>
              <th>inserted</th>
              <th>updated</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody className="table-body">
            {candidateDets && candidateDets.length !== 0 ? (
              candidateDets
                .filter((sdata: any) => {
                  return sdata.votingCampaignId === campaignid
                })
                .filter((vcsdata: any) => {
                  return vcsdata.votingCampaignStageId === campaignstageid
                })
                .map((data: any, index: number) => {
                  return (
                    <tr
                      key={index}
                      className="cursor-pointer hover:bg-[#0b005a19] duration-150"
                    >
                      <td className="sn">{index + 1}</td>
                      <td>{data.name}</td>
                      <td>{data.age}</td>
                      <td>{data.gender}</td>
                      <td>{data.nationality}</td>
                      <td>{data.weight}</td>
                      <td>{data.city}</td>
                      <td className="image">
                        <img src={data.profilePicture} alt="pic" />
                      </td>
                      <td className="flex items-center justify-center  ">
                        <Link to={data.social.Instagram} target="_blank">
                          <BsInstagram color="#e51c24" />
                        </Link>
                        <Link
                          to={data.social.Facebook}
                          target="_blank"
                          className="ml-3"
                        >
                          <BsFacebook color="blue" />
                        </Link>
                        <Link
                          to={data.social.Twitter}
                          target="_blank"
                          className="ml-3"
                        >
                          <BsTwitter />
                        </Link>
                      </td>
                      <td>{data.inserted}</td>
                      <td>{data.updated}</td>

                      <td className="action">
                        <button className="bttn delete-btn">Delete</button>
                      </td>
                    </tr>
                  )
                })
            ) : (
              <tr>
                <h1 className="notfound">Data not found.</h1>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}
