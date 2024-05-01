import { BsFillArrowLeftSquareFill } from "react-icons/bs"
import { FaPlus } from "react-icons/fa"
import { Link, useNavigate, useParams } from "react-router-dom"

const TableTop : React.FC = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  return (
    <div className="table-wrapper-top">
      <Link
        to={".."}
        onClick={(e) => {
          e.preventDefault()
          navigate(-1)
        }}
      >
        <BsFillArrowLeftSquareFill className="icon" />
      </Link>
      <Link to={`addentry`} state={{name : id?.split('=').at(-1) , id : id?.split('&').at(0)}} >
        <button
          className="add-btn"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <span>
            <FaPlus />
          </span>
          Add Entry
        </button>
      </Link>
    </div>
  )
}

export default TableTop
