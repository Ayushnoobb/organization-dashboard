import React from "react"
import { BsFillArrowLeftSquareFill } from "react-icons/bs"
import { Link, useNavigate } from "react-router-dom"
const PrevBtn = () => {
  let navigate = useNavigate()
  return (
    <Link
      to={".."}
      onClick={(e) => {
        e.preventDefault()
        navigate(-1)
      }}
    >
      <BsFillArrowLeftSquareFill className="icon" />
    </Link>
  )
}

export default PrevBtn
