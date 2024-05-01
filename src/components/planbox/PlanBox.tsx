import React from "react"
import { FaRegCircleCheck } from "react-icons/fa6"
const PlanBox = ({ dets }: { dets: any }) => {
  return (
    <div className="plan-box">
      <div className="plan-box-top">
        <p className="title">{dets?.toptitle}</p>
        <p className="desc">{dets?.topdesc}</p>
      </div>
      <div className="plan-box-dets">
        <h1>
          <span className="prev-price">Rs{dets.prevPrice}</span>Rs{" "}
          {dets.currentPrice}
        </h1>
        <p>for {dets.timelimit}</p>
        <ul className="plan-list">
          {dets?.plansList.map((list: any, index: string) => {
            return (
              <li className={index} key={JSON.stringify(index)}>
                <p>{list}</p>
                <span>
                  <FaRegCircleCheck className="icon" />
                </span>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="plan-box-bottom">
        <button className="delete-button">Delete plan</button>
      </div>
    </div>
  )
}

export default PlanBox
