import { useEffect, useState } from "react"
import { LOGO } from "../../constants/images"
import { UIInput } from "../../ui/uiinput/UIInput"
import UIButton from "../../ui/uibutton/UIButton"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootStore } from "../../redux/store"
import { loginHandler, LoginPostDataInterface } from "../../redux/actions/login/login.action"
export const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const Login = () => {
  /**
   * {
    "email":"ayush@supremeitsolutions.com",
    "password":"Jknglobal@123"
}
   */
  // const loginInfo = TypedSelector(loginData)
  const dispatch = useDispatch<AppDispatch>()
  const { data, isFulfilled } = useSelector((state: RootStore) => state.login)
  const navigate = useNavigate()
  const Location = useLocation()
  const queryParams = new URLSearchParams(Location.search)
  const redirectUrl = queryParams.get('redirect')
  const decodedUrl = decodeURIComponent(redirectUrl?.split('=').at(1)!)
  const [state, setState] = useState<LoginPostDataInterface>({
    email: "",
    password: "",
  })
  const [error, setError] = useState({
    email: "",
    password: "",
  })
  const handleInput = (e: any) => {
    const value = e.target.value
    setState((prev) => ({ ...prev, [e.target.name]: value ?? "" }))
    value &&
      setError((prev) => ({
        ...prev,
        [e.target.name]: "",
      }))
  }
  const handleFormSubmit = (e: any) => {
    e.preventDefault()
    if (!emailRegex.test(state.email)) {
      return
    }
    if (state.password.length < 6) {
      return
    }
    dispatch(loginHandler(state))
  }

  useEffect(() => {
    console.log('is fulfilled change')
    console.log(isFulfilled)
    if (isFulfilled) {
      if (redirectUrl) {
        window.location.replace(decodedUrl)
      } else {
        navigate('/dashboard')
      }
    }

  }, [isFulfilled])


  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "white",
        position: "relative",
      }}
    >
      <div className="loginform">
        <div className="loginform-loginformtop">
          <div className="loginform-loginformtop--loginformtoptext">
            <h1>Welcome Back</h1>
            <h2>
              Sign in to <strong>FDAPP</strong> Dashboard
            </h2>
          </div>
          <div className="loginform-loginformtop--loginformtopimage">
            <div className="loginform-loginformtop--loginformtopimage_image">
              <img src={LOGO} alt="" height="100%" width="100%" />
            </div>
          </div>
        </div>
        <form
          className="loginform-loginformform"
          method="POST"
          onSubmit={handleFormSubmit}
        >
          <div className="loginform-loginformform--flex">
            <UIInput
              id="email"
              name="email"
              isRequired
              label="Email"
              placeholder="eg. xyz@gmail.com"
              type="email"
              error={error.email}
              onChange={handleInput}
              value={state.email}
            />
            <UIInput
              id="password"
              name="password"
              isRequired
              label="Password"
              placeholder="eg. ********"
              type="password"
              error={error.password}
              onChange={handleInput}
              value={state.password}
            />
          </div>
          <div className="loginform-loginformform--submit">
            <UIButton
              label="Login"
              type="primary duotone"
            />
          </div>
        </form>
      </div>
    </div>
  )
}
