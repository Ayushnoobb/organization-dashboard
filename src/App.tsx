import React, { useEffect, useRef, useState } from "react"
import AppRouter from "./appRouter/AppRouter"
import Sidebar from "./components/sidebar/Sidebar"
import { useDispatch, useSelector } from "react-redux"
import { systemData, toggleMenu } from "./redux/slices/systemSlice"
import "./App.css"
import { useLocation } from "react-router-dom"
import { TypedSelector, useAppDispatch } from "./utils/redux.utils"
import { RootStore } from "./redux/store"
import { isExpired } from "./utils/helper"
import { getXApikey } from "./redux/actions/XApiKey/xapikey.actions"
const App :React.FC = () => {
  const didMount = useRef<boolean>(false);
  const { x_api, expiry } = useSelector((state: RootStore) => state.x_api_key);
  const appDispatch = useAppDispatch()
  const location = useLocation()
  const [showSidebar, setShowSidebar] = useState(false)
  const systemSelector = TypedSelector(systemData)
  const dispatch = useDispatch();

  const handleToggleBar = () => {
    dispatch(toggleMenu())
  }
  const checkSideBarStatus = (path: string): boolean => {
    if (path === "/")
      return true
    if(path==="/login")
        return true
    if(path==="*"){
      return false
    }
    return false
  }
  useEffect(() => {
    checkSideBarStatus(location.pathname) ? setShowSidebar(false) : setShowSidebar(true)
  }, [location.pathname])
  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      if (!x_api || isExpired(expiry)) appDispatch(getXApikey());
    }
  }, [dispatch, x_api, expiry]);
  return (
    <div className="app">
      {showSidebar && (
        <Sidebar
          collapse={systemSelector.menu}
          handleToggleBar={handleToggleBar}
        />
      )}
      <AppRouter iscollapse={systemSelector.menu} />
    </div>
  )
}

export default App
