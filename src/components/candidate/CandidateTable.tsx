import React, { useEffect, useRef } from "react"
import TableTop from "../tabletop/Tabletop"
import { Link, useParams } from "react-router-dom"
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs"
import { CandidateInterface } from "../../redux/slices/interface/candidates.interface"
import { convertIsoToNormalDateTime } from "../../utils/helper"
import { S3_URL } from "../../constants/constants"
import { useDispatch, useSelector } from "react-redux"
import { RootStore } from "../../redux/store"
import Loading from "../Loading/Loading"
import { dismissToast, errorToast, loadingToast, successToast } from "../../utils/toastify"
import { FaExclamationTriangle } from "react-icons/fa"
import { useAppDispatch } from "../../utils/redux.utils"
import { DeleteCandidatesThunk } from "../../redux/actions/candidates/deleteCanidate.sctions"
import { dataService } from "../../utils/axios"
import { resetState } from "../../redux/slices/candidates/deleteCandidates.slices"
import { GetAllCandidateByVotingCampaignIdThunk } from "../../redux/actions/candidates/getAllCandidatesByVotingCampaignId.actions"


export const CandidateTable: React.FC<{ candidate: CandidateInterface[] | null, campaignid: string }> = ({ candidate, campaignid }) => {
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const campaignTitle = id?.split('=').at(1)
  const { data, isLoading, isRejected } = useSelector((state: RootStore) => state.get_all_candidates_by_campaign_id);
  const { x_api } = useSelector((state: RootStore) => state.x_api_key)
  const { data: auth } = useSelector((state: RootStore) => state.login)
  const actionDispatch = useDispatch()
  const {
    isFulfilled: deleteComplete,
    isLoading: deleteIsLoading,
    isRejected: deleteIsRejected

  } = useSelector((state: RootStore) => state.delete_candidate)
  const didMount = useRef<boolean>(false)

  const handleDelete = (id: string) => {
    dataService.setApiKey(x_api!)
    dataService.setToken(auth.token!)
    dispatch(DeleteCandidatesThunk(id))
    dispatch(GetAllCandidateByVotingCampaignIdThunk(campaignid))
  }
  // const disptch = useAppDispatch(dele)
  useEffect(() => {
    isRejected && errorToast('ErrorFetching data');
  }, [isRejected])

  useEffect(() => {
    actionDispatch(resetState())
  }, [])

  useEffect(() => {
    dismissToast();
    deleteIsLoading && loadingToast('Your request is processing')
    deleteIsRejected && errorToast('Error deleting candidate')
    deleteComplete && successToast('Successfully deleteing candidate')
    console.log(campaignid)
    deleteComplete && (
      actionDispatch(resetState())
    )
  }, [deleteComplete, deleteIsLoading, deleteIsRejected])
  return (
    <>
      <h2 className="vcdata-title">
        <span>
          {campaignTitle ?? 'Campaign'}  - Candidates
        </span>
      </h2>

      <TableTop />

      <div className="table-wrapper">
        <table
          className="table-wrapper-table rounded-lg overflow-hidden border"
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

          <tbody className="table-body ">
            {candidate && candidate.length !== 0 && (
              candidate
                .map((data: CandidateInterface, index: number) => {
                  return (
                    <tr
                      key={JSON.stringify(index)}
                      className="cursor-pointer hover:bg-[#0b005a19] duration-150 "
                    >
                      <td className="sn">{index + 1}</td>
                      <td>{data.name}</td>
                      <td>{data.age}</td>
                      <td>{data.gender}</td>
                      <td>{data.nationality}</td>
                      <td>{data.weight}</td>
                      <td>{data.city}</td>
                      <td className="image">
                        <img src={S3_URL + data.profilePicture} alt="pic" />
                      </td>
                      <td className="flex items-center justify-center ">
                        <Link to={data.socialMediaInstagram} target="_blank">
                          <BsInstagram color="#e51c24" />
                        </Link>
                        <Link
                          to={data.socialMediaFacebook}
                          target="_blank"
                          className="ml-3"
                        >
                          <BsFacebook color="blue" />
                        </Link>
                        <Link
                          to={data.socialMediaTwitter}
                          target="_blank"
                          className="ml-3"
                        >
                          <BsTwitter />
                        </Link>
                      </td>
                      <td>{convertIsoToNormalDateTime(data.inserted)}</td>
                      <td>{convertIsoToNormalDateTime(data.updated)}</td>
                      <td className="action">
                        <Link to={`edit/${data.id}`} state={{ data }}>
                          <button className="bttn edit-btn">Edit</button>
                        </Link>
                        <button className="bttn delete-btn" onClick={() => handleDelete(data.id)}>Delete</button>
                      </td>
                    </tr>
                  )
                })
            )}
          </tbody>
        </table>
      </div>
      {
        isLoading && <Loading />
      }
      {
        isRejected && <h4 className="notfound text-red-400 text-center py-4 flex w-full items-center gap-1"><FaExclamationTriangle className="fill-[red] " /> Error fetching data.</h4>
      }
      {
        data?.length === 0 && <h4 className="notfound notfound  text-center py-4 flex">No data to display</h4>
      }
    </>
  )
}
