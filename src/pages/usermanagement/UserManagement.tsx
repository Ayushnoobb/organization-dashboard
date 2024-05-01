import React, { useEffect, useRef } from "react"
import Navbar from "../../components/navbar/Navbar"
import PrevBtn from "../../ui/prevbutton/BackBtn"
import DaysLeftCalculator from "../../ui/daysleft/Daysleft"
import { useSelector } from "react-redux"
import { RootStore } from "../../redux/store"
import { isExpired } from "../../utils/helper"
import { GetAllUsers } from "../../redux/actions/user/getAllUsers.actions"
import { useAppDispatch } from "../../utils/redux.utils"
import { dataService } from "../../utils/axios"
import { S3_URL } from "../../constants/constants"
import BlockButton from "../../components/UserActions/BlockButton/BlockButton"
import DeleteButton from "../../components/UserActions/DeleteButton/DeleteButton"

export const UserManagement : React.FC = () => {
  const  { data , expiry } = useSelector((state :RootStore) => state.get_all_user)
  const  { x_api} = useSelector((state : RootStore) => state.x_api_key)
  const { data : AuthData } = useSelector((state : RootStore) => state.login)
  const dispatch = useAppDispatch()
  const didMount = useRef<boolean>(false)

  console.log(data)

  useEffect(() => {
    if(!didMount.current){
      didMount.current = true
      if(!data || isExpired(expiry)) {
        dataService.setApiKey(x_api!)
        dataService.setToken(AuthData.token!)
        dispatch(GetAllUsers())
      }
    }
  },[dispatch])

  return (
    <div className="framecontainer">
      <div className="framecontainer-content">
        <div className="dashboard">
          <Navbar name="User" showBars />
        </div>

        <div className="table-wrapper-top">
          <PrevBtn />
        </div>

        <div className="table-wrapper">
          <table className="table-wrapper-table" border={0}>
            <thead>
              <tr>
                <th>SN</th>
                <th>name</th>
                <th>email</th>
                <th>profile</th>
                <th>isVerified</th>
                <th>status</th>
                <th>LoginIp</th>
                <th>Login</th>
                <th>PassChange</th>
                <th>Notification</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody className="table-body">
              {data && data?.length > 0  ?(
                data.map((user, index) => {
                  return (
                    <tr key={index}>
                      <td className="sn">{index + 1}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td className="image">
                        <img src={user.profile ? S3_URL + user.profile : '/noavatar.jpg'} alt="pic" className="rounded-full" />
                      </td>
                      <td>{user.isVerified ? "Verified" : "Not Verified"}</td>
                      <td>{user.accessToken ? 'active' : 'offline'}</td>
                      <td>{user.lastLoginIp}</td>
                      <td>
                        <DaysLeftCalculator
                          date={user.lastLogin}
                          title=""
                          finishTitle=""
                          classname="start"
                        />
                      </td>
                      <td>
                        <DaysLeftCalculator
                          date={user.lastPasswordChanged?.split('T').at(0)}
                          title=""
                          finishTitle=""
                          classname="start"
                        />
                      </td>
                      <td>
                        <DaysLeftCalculator
                          date={user.lastNotificationActivity?.split('T').at(0)}
                          title=""
                          finishTitle=""
                          classname="start"
                        />
                      </td>

                      <td className="action">
                        <BlockButton id={user.id} disabled={user.isBlocked} />
                        <DeleteButton id={user.id} />
                      </td>
                    </tr>
                  )
                })
              ) : (
                <tr>
                  <td colSpan={7} className="notfound">
                    Data not found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
