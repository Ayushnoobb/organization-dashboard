import * as React from "react"
import { Bar } from "react-chartjs-2"
import Chart from "chart.js/auto"
import { CategoryScale } from "chart.js"

Chart.register(CategoryScale)
Chart.defaults.color = "black"

const BarC = () => {
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
  ]
  return (
    <div className="chartwrapper">
      <Bar
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
              backgroundColor: "#0b005a",
              borderColor: "#0e005c",
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  )
}

export default BarC
