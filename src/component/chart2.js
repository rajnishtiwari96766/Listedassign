import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
class PieRechartComponent extends React.Component {
   COLORS = ["#98d89e", "#ee8484", "#f7dc7d"];
   pieData = [
      {
         name: "Basic Tees",
         value: 54.85
      },
      {
         name: "Custom Short Pants",
         value: 47.91
      },
     
      {
         name: "Super Hoodies",
         value: 28.25
      }
   ];
   CustomTooltip = ({ active, payload, label }) => {
      if (active) {
         return (
         <div
            className="custom-tooltip"
            style={{
               backgroundColor: "#ffff",
               padding: "5px",
               border: "1px solid #cccc"
            }}
         >
            <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
         </div>
      );
   }
   return null;
};
render() {
   return (
      <PieChart width={300} height={300} >
      <Pie
         data={this.pieData}
         color="#000000"
         dataKey="value"
         nameKey="name"
         cx="20%"
         cy="0%"
         outerRadius={60}
         fill="#8884d8"
      >
         {this.pieData.map((entry, index) => (
            <Cell
               key={`cell-${index}`}
               fill={this.COLORS[index % this.COLORS.length]}
            />
         ))}
      </Pie>
      <Tooltip content={<this.CustomTooltip />} />
      <Legend layout="vertical" verticalAlign="top" wrapperStyle={{top:10, left:220,width:220}} />
      </PieChart>
      );
   }
}
export default PieRechartComponent;