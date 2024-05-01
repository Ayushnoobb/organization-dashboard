import React, { useEffect, useRef } from "react"
import Navbar from "../../components/navbar/Navbar"
import { Link, useNavigate, useParams } from "react-router-dom"
import TableTop from "../../components/tabletop/Tabletop"
import DateCountdown from "../../ui/daysleft/DaysCountDown"
import { useSelector } from "react-redux"
import { RootStore } from "../../redux/store"
import { dataService } from "../../utils/axios"
import { CouponInterface } from "../../redux/slices/interface/coupon.interface"
import { useAppDispatch } from "../../utils/redux.utils"
import { GetCouponsByVotingCampaignId } from "../../redux/actions/coupon/getCouponByCampaignId.actions"
import Loading from "../../components/Loading/Loading"

export const CoupanTransaction = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const  { x_api } = useSelector((state : RootStore) => state.x_api_key)
  const didMount = useRef<boolean>(false)
  const dispatch = useAppDispatch()
  const { data : CouponData , isPending , isFulfilled , isRejected  } = useSelector((state : RootStore) => state.coupon_by_campaign_id)

  useEffect(()=>{
    if(!didMount.current){
      didMount.current = true;
      dataService.setApiKey(x_api!);
      if(!id) navigate('/votingCampaign')
      id && dispatch(GetCouponsByVotingCampaignId(id))
    }
  },[id , dispatch])
  return (
    <div className="framecontainer">
      <div className="framecontainer-content">
        <div className="dashboard">
          <Navbar name="Coupan" showBars />
        </div>

        {CouponData && CouponData.slice(0,1)
          .map((item : CouponInterface, index) => {
            return (
              <h2 key={index} className="vcdata-title">
                {" "}
                <span>
                  {item.name} Coupon{" "}
                </span>{" "}
              </h2>
            )
          })}
        <TableTop />

        <div className="table-wrapper">
          <table
            className="table-wrapper-table rounded-lg overflow-hidden border"
            border={0}
          >
            <thead>
              <tr>
                <th>SN</th>
                <th>id</th>
                <th>campID</th>
                <th>name</th>
                <th>votes</th>
                <th>eligibleCandidate</th>
                <th>pricing</th>
                <th>currency</th>
                <th>TimeLine</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody className="table-body ">
              {CouponData && CouponData.length !== 0 &&
                CouponData
                  .map((data: any, index: number) => {
                    return (
                      <tr
                        key={JSON.stringify(index)}
                        className="cursor-pointer hover:bg-[#0b005a19] duration-150 "
                      >
                        <td className="sn">{index + 1}</td>
                        <td className="text-center">{data.id}</td>
                        <td className="text-center">{data.votingCampaignId}</td>
                        <td className="text-center">{data.name}</td>
                        <td className="text-center">{data.votes}</td>
                        <td className="text-center">{data.eligibleCandidateCounts}</td>
                        <td className="text-center">{data.pricing}</td>
                        <td className="text-center">{data.currency}</td>
                        <td className="text-center">
                          <DateCountdown
                            startDate={data.avaibilityPeriodStart}
                            endDate={data.avaibilityPeriodEnd}
                          />
                        </td>

                        <td className="action">
                          <Link to={`edit/${data.id}`}>
                            <button className="bttn edit-btn">Edit</button>
                          </Link>
                          <button className="bttn delete-btn">Delete</button>
                        </td>
                      </tr>
                    )
                  })
             }
            </tbody>
          </table>
            {
              isRejected && 'Error fetching datas..'
            }
            {
              isPending && <Loading />
            }
        </div>
      </div>
    </div>
  )
}
