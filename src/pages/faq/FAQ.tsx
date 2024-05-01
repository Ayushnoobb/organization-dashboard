/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react"
import Navbar from "../../components/navbar/Navbar"
import { UIInput } from "../../ui/uiinput/UIInput"
import UIButton from "../../ui/uibutton/UIButton"
import { FaRegQuestionCircle } from "react-icons/fa"
import { MdDeleteOutline } from "react-icons/md"
import { BiSolidEdit } from "react-icons/bi";
import { GoTriangleRight } from "react-icons/go";
import { TypedSelector, useAppDispatch } from "../../utils/redux.utils"
import { loginData } from "../../redux/slices/login/login.slices"
import { getFaqs } from "../../redux/actions/faq/faq.action"
import { faqData } from "../../redux/slices/faq/faq.slice"
import { createFaq } from "../../redux/actions/faq/addFa.action"
import { useSelector } from "react-redux"
import { RootStore } from "../../redux/store"
interface MesageInterface {
  question: string
  answer: string
}
export const FAQ : React.FC = () => {
  const loginInfo = TypedSelector(loginData)
  const faqs = TypedSelector(faqData)
  const dispatch = useAppDispatch()
  const  { x_api } = useSelector((state : RootStore) => state.x_api_key)


  // useEffect(() => {
  //   if (loginInfo.data?.data) {
  //     dispatch(getXapiKey(loginInfo.data.data?.customer.id))
  //   }
  // }, [dispatch, loginInfo.data])

  
  useEffect(() => {
    if (x_api)
      dispatch(getFaqs())
  }, [dispatch])
  const [state, setState] = useState<MesageInterface>({
    question: "",
    answer: "",
  })
  let handlechange = (e: any) => {
    let value = e.target.value
    setState((prev: any) => ({ ...prev, [e.target.name]: value ?? "" }))
  }
  let submithandler = () => {
    dispatch(createFaq())
  }
  const [openqa, setOpenqa] = useState<number | null>(null);
  let toggleqa = (index: number) => {
    setOpenqa((prevIndex: number | null) => (prevIndex === index ? null : index));
  }
  return (
    <div className="framecontainer">
      <div className="framecontainer-content">
        <div className="dashboard">
          <Navbar name="FAQ" showBars />
        </div>

        <div className="faq-page">
          <div className="add-qa">
            <p className="title">Add or delete FAQs</p>
            <div className="add-qa-input flex items-center justify-center ">
              <UIInput
                name="question"
                onChange={handlechange}
                type="text"
                value={state.question}
                label="Question"
                classname="w-full"
              />
              <UIInput
                name="answer"
                onChange={handlechange}
                type="text"
                value={state.answer}
                label="Answer"
                classname="w-full"
              />

              <UIButton
                onClick={submithandler}
                label="Add"
                style={{ color: "white" }}
                className="btn-primary px-20"
              />
            </div>
          </div>
          {faqs?.data?.success ?
            <div className="display-faq">
              <ul className="faq-lists">
                {faqs?.data?.data?.map((item, index: number) => {
                  return (
                    <li key={JSON.stringify(index)}
                      onClick={() => {
                        toggleqa(index)
                      }} >
                      <span className="question-wrapper">
                        <p className="question">
                          <span>
                            <GoTriangleRight style={{ rotate: openqa === index ? "90deg" : "0deg" }} />
                          </span>
                          <span>
                            <FaRegQuestionCircle />
                          </span>
                          {item.question}
                        </p>{" "}
                        <div className="action">
                          <BiSolidEdit className="edit-icon" />
                          <MdDeleteOutline className="del-icon" />
                        </div>
                      </span>

                      <span className="answer-wrapper" style={{ display: index === openqa ? "block" : "none" }}>
                        <p className="answer">{item.answer}</p>
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div> :
            <div className="w-full h-1/2 flex items-center justify-center">
              <h1 className="text-2xl">Fetching Faqs...</h1>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default FAQ
