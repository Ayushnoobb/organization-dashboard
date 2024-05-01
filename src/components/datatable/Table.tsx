import React from "react"
import { Link } from "react-router-dom"
import TableTop from "../tabletop/Tabletop"

const DataTable = ({ tableData }: { tableData: any }) => {
  return (
    <>
      <TableTop />
      <div className="table-wrapper">
        {tableData && tableData.length > 0 ? (
          <table className="table-wrapper-table" border={0}>
            <thead>
              <tr>
                <>
                  <th>SN</th>
                  {Object.keys(tableData[0]).map((col, index) => {
                    return <th key={index}>{col}</th>
                  })}
                  <th>Action</th>
                </>
              </tr>
            </thead>
            <tbody className="table-body">
              {tableData ? (
                tableData?.map((data: any, index: number) => {
                  return (
                    <tr key={JSON.stringify(index)}>
                      <td className="sn">{index + 1}</td>
                      {Object.values(data).map((value: any, index) => {
                        return <td key={JSON.stringify(index)}>{value}</td>
                      })}
                      <td className="action">
                        <Link to={`edit/${data.ID || data.Id || data.id}`}>
                          <button className="bttn edit-btn">Edit</button>
                        </Link>
                        <button className="bttn delete-btn">Delete</button>
                      </td>
                    </tr>
                  )
                })
              ) : (
                <h1>Data not found.</h1>
              )}
            </tbody>
          </table>
        ) : (
          <h1>Nothing to show</h1>
        )}
      </div>
    </>
  )
}

export default DataTable
