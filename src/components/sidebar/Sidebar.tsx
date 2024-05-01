import { useSelector } from "react-redux"
import { Link, useLocation } from "react-router-dom"
import { FaAngleDown } from "react-icons/fa"
import { FaNewspaper, FaRegCircleDot } from "react-icons/fa6"
import { LOGO1 } from "../../constants/images"
import { useEffect, useRef, useState } from "react"
import { IoChevronBackSharp } from "react-icons/io5"





export default function Sidebar({ collapse, handleToggleBar }: { collapse: boolean, handleToggleBar: () => void }) {
  const menuItems = [
    { href: "/dashboard", title: "Dashboard", iconName: "fa-home" },
    {
      href: "/votingcampaign",
      title: "Voting Campaign",
      iconName: "fas fa-vote-yea",
      innerpages: [
        {
          href: "/votes",
          title: "Votes",
        },
        {
          href: "/result",
          title: "Result",
        },
      ],
    },

    {
      href: "/reports",
      title: "Reports",
      iconName: "fa-chart-bar",
    },

    {
      href: "/user",
      title: "User Management ",
      iconName: "fa-user-cog",

    },
    { href: "/faq", title: "FAQ", iconName: "fa-question-circle" },
    { href: "/news", title: "News", iconName: "fa-newspaper" },
    {
      href: "/notifications",
      title: "Notifications",
      iconName: "fa-bell",
      innerpages: [
        {
          href: "/email",
          title: "Email Notification",
        },
        {
          href: "/sms",
          title: "SMS Notification",
        },

      ],
    },
    { href: "/logout", title: "Logout", iconName: "fa-sign-out-alt" },
  ]

  // close sidebar while click outside in mobile
  let sidebarRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target as Node) &&
        collapse && window.innerWidth < 1100
      ) {
        handleToggleBar();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarRef, collapse, handleToggleBar]);



  const location = useLocation()
  return (
    <div ref={sidebarRef} className="sidebar" style={{ width: collapse ? "250px" : "50px" }} >
      <div className="sidebar-top">
        <div className="sidebar-top--logo">
          <div style={{ display: collapse ? "flex" : "none" }} className="sidebar-top--logo-title">
            <img
              src={LOGO1}
              alt="Esquare logo"
              className="sidebar-top--logo__icon"
            />
            <h1>FDAPP</h1>
          </div>
          <div
            className="sidebar-top--logo__back"
            style={{ display: collapse ? "flex" : "none" }}
          >
            <IoChevronBackSharp
              onClick={handleToggleBar}
              className="h-full w-full p-3"
            />
          </div>
        </div>
        <ul className={`sidebar-top--menu`}>
          {menuItems.map((value, index) => {
            return (
              <MenuItem
                href={value.href}
                title={value.title}
                innerpages={value.innerpages}
                isActive={location.pathname.indexOf(value.href) > -1}
                iconName={value.iconName}
                key={index}
                showLabel={collapse}
                collapse={collapse}
                handleToggleBar={handleToggleBar}

              />
            )
          })}
        </ul>
      </div>
    </div>
  )
}

const MenuItem = ({
  href,
  iconName,
  title,
  isActive,
  showLabel,
  innerpages,
  collapse,
  handleToggleBar

}: {
  href: any,
  iconName: any,
  title: any,
  isActive: any,
  showLabel: any,
  innerpages: any,
  collapse: any,
  handleToggleBar: any,
}) => {

  const [toggleLink, settoggleLink] = useState(false)

  // collapse sidebar when navigate to other pages in mobile
  useEffect(() => {
    if (!collapse) {
      settoggleLink(false)
    }
  }, [collapse]);

  let openInnerMenu = () => {
    if (collapse) {
      if (collapse) {
        settoggleLink(!toggleLink)
      }
      else {
        settoggleLink(false)
      }
    }
  }

    let menuref = useRef(null)
    return (
      <div>
        <li
          className={`sidebar-top--menu__item${isActive ? " active" : ""} ${showLabel ? "open" : "close"}  mt-2 duration-250`}
        >
          <Link to={href} title={title} onClick={() => {
            (collapse && window.innerWidth <= 1100 && !innerpages) && handleToggleBar()
            innerpages && openInnerMenu()
          }}>
            <i className={`fa-solid ${iconName}`}></i>
            {showLabel ? <span>{title}</span> : null}
          </Link>
          {innerpages && collapse && (
            <FaAngleDown
              onClick={openInnerMenu}
              className="sidebar-top--menu__item-icon"
            />
          )}
        </li>
        {toggleLink && (
          <ul ref={menuref} className="sidebar-top--menu-innermenu">
            {innerpages &&
              innerpages.map((page: any, index: number) => {
                return (
                  <li key={index} className={`sidebar-top--menu__item mt-1 `}>
                    <Link onClick={() => {
                      (collapse && window.innerWidth <= 1100) && handleToggleBar()
                    }} to={`${href}${page.href}`} title={page.title} className=" cursor-pointer w-full h-full">
                      <FaRegCircleDot className="icon" />
                      <span>{page.title}</span>
                    </Link>
                  </li>
                )
              })}
          </ul>
        )}
      </div>
    )
  }
