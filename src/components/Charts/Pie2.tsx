import * as React from "react"
import { Doughnut } from "react-chartjs-2"
import Chart from "chart.js/auto"
import { CategoryScale } from "chart.js"

Chart.register(CategoryScale)
Chart.defaults.color = "black"

const PieC2 = () => {
  const data = [
    {
      name: "Jan",
      uv: 2200,
    },
    {
      name: "Feb",
      uv: 3000,
    },
    {
      name: "Mar",
      uv: 1400,
    },
    {
      name: "Apr",
      uv: 3780,
    },
    {
      name: "May",
      uv: 1890,
    },
    {
      name: "Jun",
      uv: 2390,
    },
    {
      name: "Jul",
      uv: 2290,
    },
    {
      name: "Aug",
      uv: 2290,
    },
  ]
  return (
    <div className="chartwrapper">
      <Doughnut
        data={{
          labels: data.map((item) => {
            return item.name
          }),

          datasets: [
            {
              label: "Sales",
              data: data.map((item) => {
                return item.uv
              }),
              backgroundColor: [
                "#0b005a",
                "#cc0177",
                "#0b005a",
                "#cc0177",
                "#0b005a",
                "#cc0177",
              ],
              borderColor: "white",
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          elements: {
            line: {
              borderWidth: 8,
            },
            point: {
              radius: 7,
            },
          },
        }}
      />
    </div>
  )
}
export default PieC2
