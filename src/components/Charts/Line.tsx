import * as React from "react"
import { Line } from "react-chartjs-2"
import Chart from "chart.js/auto"
import { CategoryScale } from "chart.js"

Chart.register(CategoryScale)
Chart.defaults.color = "black"

const LineC = () => {
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
      uv: 2000,
    },
    {
      name: "Apr",
      uv: 2780,
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
      <Line
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
              backgroundColor: "#cc0177",
              borderColor: "#0b005a",
              tension: 0.2,
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

export default LineC
