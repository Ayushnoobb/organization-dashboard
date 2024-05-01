// import React, { PureComponent } from 'react';
// import { PieChart, Pie, Sector} from 'recharts';

// const data = [
//   { name: 'Group A', value: 400 },
//   { name: 'Group B', value: 300 },
//   { name: 'Group C', value: 300 },
//   { name: 'Group D', value: 200 },
// ];

// const renderActiveShape = (props) => {
//   const RADIAN = Math.PI / 180;
//   const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, payload, percent, value } = props;
//   const sin = Math.sin(-RADIAN * midAngle);
//   const cos = Math.cos(-RADIAN * midAngle);
//   // const sx = cx + (outerRadius + 5) * cos;
//   // const sy = cy + (outerRadius + 5) * sin;
//   const mx = cx + (outerRadius + 5) * cos;
//   const my = cy + (outerRadius + 5) * sin;
//   const ex = mx + (cos >= 0 ? 1 : -1) * 10;
//   const ey = my;
//   const textAnchor = cos >= 0 ? 'start' : 'end';

//   return (
//     <g>
//       <text x={cx} y={cy} dy={2} textAnchor="middle" fill='#A57C01'>
//         {payload.name}
//       </text>
//       <Sector
//         cx={cx}
//         cy={cy}
//         innerRadius={innerRadius}
//         outerRadius={outerRadius}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         fill='#A57C01'
//       />
//       <Sector
//         cx={cx}
//         cy={cy}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         innerRadius={outerRadius + 6}
//         outerRadius={outerRadius + 10}
//         fill='#EBB104'
//       />
//       {/* <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke='pink' fill="none" />
//       <circle cx={ex} cy={ey} r={2} fill='gray' stroke="none" /> */}
//       <text x={ex + (cos >= 0 ? 1 : -1) * 5} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
//       <text x={ex + (cos >= 0 ? 1 : -1) * 5} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
//         {`(Rate ${(percent * 100).toFixed(2)}%)`}
//       </text>
//     </g>
//   );
// };

// export default class PieC extends PureComponent {
// //   static demoUrl = 'https://codesandbox.io/s/pie-chart-with-customized-active-shape-y93si';

//   state = {
//     activeIndex: 0,
//   };

//   onPieEnter = (_, index) => {
//     this.setState({
//       activeIndex: index,
//     });
//   };

//   render() {
//     return (
//     //   <ResponsiveContainer width="100%" height="100%">
//         <PieChart width={250} height={200}>
//           <Pie
//             activeIndex={this.state.activeIndex}
//             activeShape={renderActiveShape}
//             data={data}
//             cx="50%"
//             cy="50%"
//             innerRadius={40}
//             outerRadius={55}
//             fill="#EBB104"
//             dataKey="value"
//             onMouseEnter={this.onPieEnter}
//           />
//         </PieChart>
//     //   </ResponsiveContainer>
//     );
//   }
// }

import React from "react"
import { PolarArea } from "react-chartjs-2"

const PieC = () => {
  return (
    <div style={{ width: "300px", height: "300px" }}>
      <PolarArea
        data={{
          labels: ["Red", "Green", "Yellow", "Grey", "Blue"],
          datasets: [
            {
              label: "My First Dataset",
              data: [11, 16, 7, 3, 14],
              backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(75, 192, 192)",
                "rgb(255, 205, 86)",
                "rgb(201, 203, 207)",
                "rgb(54, 162, 235)",
              ],
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

export default PieC
