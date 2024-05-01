import React, { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import {InitialDashboardDataInterface } from "../../redux/slices/interface/dashboard.interface"
import { useSelector } from "react-redux"
import { RootStore } from "../../redux/store"
import { useAppDispatch } from "../../utils/redux.utils"
import { dataService } from "../../utils/axios"
import { GetDashBoardData } from "../../redux/actions/Dashboard/dashboard.actions"
import { isExpired } from "../../utils/helper"

const Counter : React.FC = () => {
  const {dashboardData , expiry} : Partial<InitialDashboardDataInterface> = useSelector((state : RootStore) => state.dashboard)
  const dispatch = useAppDispatch();
  const {x_api} = useSelector((state : RootStore) => state.x_api_key);
  const {data}   = useSelector((state : RootStore) => state.login);
  const didMount = useRef(false);

  
  useEffect(() => {
    if(!didMount.current){
      didMount.current = true
      x_api && dataService.setApiKey(x_api)
      data.token && dataService.setToken(data.token)
      if(!dashboardData || isExpired(expiry))dispatch(GetDashBoardData())
    }
  },[dispatch])
  return (
    <div className="dashboard">
      <div className="dashboard-analytics">
        <Link to="/user" className="dashboard-analytics--card">
          <div className="dashboard-analytics--card_icon">
            <i className="fa-regular fa-users"></i>
          </div>
          <h3>Users</h3>

          <h4>{dashboardData?.userCount ?? '00'}</h4>
        </Link>

        <Link to="/reports" className="dashboard-analytics--card">
          <div className="dashboard-analytics--card_icon">
            <i className="fas fa-vote-yea"></i>
          </div>
          <h3>Voting Polls</h3>

          <h4>{dashboardData?.votingCampaignStageCount ?? '00'}</h4>
        </Link>

        <Link to="/votingcampaign" className="dashboard-analytics--card">
          <div className="dashboard-analytics--card_icon">
            <i className="fas fa-user"></i>
          </div>
          <h3>Contestants</h3>

          <h4>{dashboardData?.candidateCount ?? '00'}</h4>
        </Link>

        <Link to="/reports" className="dashboard-analytics--card">
          <div className="dashboard-analytics--card_icon">
            <i className="fa-regular fa-memo-circle-check"></i>
          </div>
          <h3>Voters</h3>

          <h4>0</h4>
        </Link>
      </div>
    </div>
  )
}

export default Counter
