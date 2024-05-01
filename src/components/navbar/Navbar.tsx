import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../redux/store";
import { isExpired } from "../../utils/helper";
import { getXApikey } from "../../redux/actions/XApiKey/xapikey.actions";
import { toggleMenu } from "../../redux/slices/systemSlice";
import { logout } from "../../redux/slices/login/login.slices";
import { DUMMY_PROFILE } from "../../constants/images";
import { useAppDispatch } from "../../utils/redux.utils";
import { DashboardData } from "../../redux/slices/interface/dashboard.interface";

interface NavbarProps {
  name: string
  showBars: boolean
  back?: () => void
}

const Navbar: React.FC<NavbarProps> = ({ name, showBars, back }) => {
  const didMount = useRef<boolean>(false);
  const { x_api, expiry } = useSelector((state: RootStore) => state.x_api_key);

  const dispatch = useDispatch();
  const appDispatch = useAppDispatch()

  const handleToggleBar = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      if (!x_api || isExpired(expiry)) appDispatch(getXApikey());
    }
  }, [dispatch,x_api, expiry]);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        {back ? (
          <i
            className="fa-regular fa-chevron-left navbar-left--icon__back"
            onClick={back}
          ></i>
        ) : null}
        {showBars ? (
          <i
            className={`navbar-left--icon__bar fa-light fa-bars`}
            onClick={handleToggleBar}
          ></i>
        ) : null}
        <h2 className="navbar-left--text">{name}</h2>
      </div>
      <div className="navbar-right">
        <button
          onClick={handleLogout}
          className="navbar-right--item navbar-right--item__logout"
        >
          <i className="fa-regular fa-arrow-right-from-bracket"></i>
        </button>
        <div className="navbar-right--profile">
          <img src={DUMMY_PROFILE} alt="User profile" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
