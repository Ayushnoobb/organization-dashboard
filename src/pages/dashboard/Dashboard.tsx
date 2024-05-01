import Navbar from "../../components/navbar/Navbar"
import Counter from "../../components/counter/Counter"
import Charts from "../../components/Charts/Chart"

export const Dashboard = () => {
  return (
    <div className="framecontainer">
      <div className="framecontainer-content">
        <div className="dashboard">
          <Navbar name="Dashboard" showBars />
          <Counter />
          <Charts />
        </div>
      </div>
    </div>
  )
}
