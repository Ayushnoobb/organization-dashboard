/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react"
import { FaPlus } from "react-icons/fa"
import { CheckboxGroup, Checkbox } from "@nextui-org/react"
import { campaignStageData, candidateData } from "../../constants/constants"

export default function CandidateModal({
  votingCampaignId,
  campaignstageid,
}: {
  votingCampaignId: any
  campaignstageid: any
}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [backdrop, setBackdrop] = React.useState("blur")
  const [state, setstate] = useState([])

  const handleOpen = () => {
    onOpen()
  }

  const handelchange = (e: any) => {
    // setstate((prev:any) => [...prev, e.target.value])
  }

  const handelSubmit = (e: any) => {
    e.preventDefault()
    console.log(state)
  }

  return (
    <>
      <Button
        className="add-btn"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          padding: "1.8rem 1rem",
        }}
        onPress={() => handleOpen()}
      >
        <span>
          <FaPlus />
        </span>
        Add Entry
      </Button>

      <Modal size="3xl" backdrop={"blur"} isOpen={isOpen} onClose={onClose}>
        <ModalContent className="px-5 py-5">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {campaignStageData
                  .filter((data) => {
                    return data.votingCampaignId === votingCampaignId
                  })
                  .filter((csdata) => {
                    return csdata.id === campaignstageid
                  })
                  .map((reqdata, index) => {
                    return (
                      <h1 key={index} className="text-3xl font-[500]">
                        {reqdata.title}
                      </h1>
                    )
                  })}
                <p className="text-xl font-normal text-[#333333]">
                  Select Candidates
                </p>
              </ModalHeader>
              <ModalBody>
                <div className="w-full checkbox-container">
                  <CheckboxGroup
                    size="lg"
                    radius="sm"
                    className="w-full h-full max-h-[45rem] overflow-auto"
                  >
                    {candidateData
                      .filter((data) => {
                        return (
                          data.votingCampaignId === votingCampaignId &&
                          data.votingCampaignStageId !== campaignstageid
                        )
                      })
                      .map((cdata, index) => {
                        return (
                          <div
                            key={index}
                            className="w-full border-1 border-[#0b005a45] shadow-sm px-4 py-2 flex items-center mb-2 rounded-lg hover:border-[#0b005a]"
                          >
                            <Checkbox
                              onChange={handelchange}
                              className="gap-5"
                              value={cdata.id}
                            >
                              <div className="w-full flex items-center justify-start gap-5">
                                <img
                                  src="/noavatar.jpg"
                                  alt="img"
                                  className="h-[3rem] w-[3rem] rounded-full"
                                />
                                <span className="flex flex-col justify-center">
                                  <p className="text-2xl font-[400]">
                                    {cdata.name}
                                  </p>
                                  <p className="text-xl  text-slate-400">
                                    {cdata.id}
                                  </p>
                                </span>
                              </div>
                            </Checkbox>
                          </div>
                        )
                      })}
                    {/* {
                                            candidateData.filter((data) => {
                                                return data.votingCampaignId === votingCampaignId
                                            }).map((cdata, index) => {
                                                return (
                                                    <div key={index} className="w-full border-1 border-[#0b005a45] shadow-sm px-4 py-2 flex items-center mb-2 rounded-lg hover:border-[#0b005a]" >
                                                        <Checkbox
                                                            onChange={handelchange}
                                                            className="gap-5" value={cdata.id}>
                                                            <div className="w-full flex items-center justify-start gap-5">
                                                                <img src="/noavatar.jpg" alt="img" className="h-[3rem] w-[3rem] rounded-full" />
                                                                <span className="flex flex-col justify-center">
                                                                    <p className="text-2xl font-[400]">{cdata.name}</p>
                                                                    <p className="text-xl  text-slate-400">{cdata.id}</p>
                                                                </span>
                                                            </div>
                                                        </Checkbox>
                                                    </div>
                                                )
                                            })
                                        } */}
                  </CheckboxGroup>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  onClick={handelSubmit}
                  onPress={onClose}
                  className="rounded-lg bg-[#0b005a] text-white h-12 w-32 "
                >
                  <p className="text-2xl">Save</p>
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
