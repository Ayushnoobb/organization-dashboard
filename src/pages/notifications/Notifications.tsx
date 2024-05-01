import React, { useState } from "react"
import Navbar from "../../components/navbar/Navbar"
// import UIButton from "../../ui/uibutton/UIButton"
import DataTable from "../../components/datatable/Table"
import TableTop from "../../components/tabletop/Tabletop"
import { Link } from "react-router-dom"
export const Notifications = () => {
  // const [tableCol, setTableCol] = useState([
  //   "ID",
  //   "Organization ID",
  //   "Title",
  //   "Message",
  //   "User ID",
  //   "InsertedAt",
  //   "UpdatedAt",
  // ])

  const tableData = [
    {
      id: "1",
      organizationId: "0075",
      title: "notification titile",
      message: "message here",
      userId: "1221",
      insertedAt: "2080-9-9",
      updatedAt: "2080-10-9",
    },
    {
      id: "2",
      organizationId: "0076",
      title: "notification titile",
      message: "message here",
      userId: "1222",
      insertedAt: "2080-9-9",
      updatedAt: "2080-10-9",
    },
  ]
  return (
    <div className="framecontainer">
      <div className="framecontainer-content">
        <div className="dashboard">
          <Navbar name="Notification" showBars />
        </div>
        <TableTop />

        <div className="table-wrapper">
          <table
            className="table-wrapper-table rounded-lg overflow-hidden border"
            border={0}
          >
            <thead>
              <tr>
                <th>SN</th>
                <th>id</th>
                <th>title</th>
                <th>message</th>
                <th>userId</th>
                <th>insertedAt</th>
                <th>updatedAt</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody className="table-body ">
              {tableData && tableData.length !== 0 ? (
                tableData.map((data: any, index: number) => {
                  return (
                    <tr
                      key={JSON.stringify(index)}
                      className="cursor-pointer hover:bg-[#0b005a19] duration-150 "
                    >
                      <td className="sn">{index + 1}</td>
                      <td>{data.id}</td>
                      <td>{data.title}</td>
                      <td>{data.message}</td>
                      <td>{data.userId}</td>
                      <td>{data.insertedAt}</td>
                      <td>{data.updatedAt}</td>

                      <td className="action">
                        <Link to={`edit/${data.id}`}>
                          <button className="bttn edit-btn">Edit</button>
                        </Link>
                        <button className="bttn delete-btn">Delete</button>
                      </td>
                    </tr>
                  )
                })
              ) : (
                <tr>
                  <h1 className="notfound">Data not found.</h1>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
