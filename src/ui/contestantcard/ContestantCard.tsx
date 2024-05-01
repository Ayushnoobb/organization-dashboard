import React from "react"
import { Link } from "react-router-dom"
import { S3_URL } from "../../constants/constants"

const ContestantCard : React.FC<{
  profile?: any
  title?: any
  name?: any
  id?: any
  votes?: any
  candidateid?: any
}
> = ({
  profile,
  title,
  name,
  id,
  votes,
  candidateid,
}) => {
  return (
    <Link to={id && id} className="card hover:shadow-xl transition-ease duration-300 hover:opacity-[0.9]">
      <div className="ds-top"></div>
      <div className="avatar-holder shadow-xl">
        <img src={S3_URL+profile} alt="Candidate" className="object-cover object-center" />
      </div>

      <div className="info">
        <div className="name">
          {title ? (
            <>
              <h2 className="title line-clamp-1 text-[14px] md:text-[16px] font-extrabold text-[var(--c-secondary)] text-center">{title.toUpperCase()}</h2>
              <p className="text-[10px] md:text-[12px]">{id}</p>
            </>
          ) : (
            <>
              <h1 className=" line-clamp-1 text-[14px] md:text-[22px] font-extrabold text-center">{name}</h1>
              <p className="text-[10px] md:text-[12px]">{candidateid}</p>
            </>
          )}
        </div>

        {votes && (
          <div className="votes">
            <h4 className="text-[14px] text-center">Votes</h4>
            <span className="text-[var(--c-secondary)]">99</span>
          </div>
        )}
      </div>
    </Link>
  )
}

export default ContestantCard
