import React, { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { PERSIST_KEY } from "../utils/config"
import { RootStore } from "../redux/store"
import { isExpired } from "../utils/helper"
import { logout } from "../redux/slices/login/login.slices"

const Auth: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { data, expiry } = useSelector((state: RootStore) => state.login)
  const Location = useLocation()
  const queryParams = new URLSearchParams(Location.search)
  const redirectUrl = queryParams.get('redirect')

  useEffect(() => {
    if (!data.token || isExpired(expiry)) {
      dispatch(logout())
      !redirectUrl && navigate(`/?redirect=${encodeURIComponent(window.location.href)}`)
    }
  }, [data.token, expiry, navigate])

  return <>{children}</>
}

export default Auth
