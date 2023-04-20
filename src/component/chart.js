import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts";
  
  export default function Chart({ data }) {
    return (
      <ResponsiveContainer width="100%" height={175} margin-right="30px">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend  wrapperStyle={{top:-40,left:300}}/>
          <Line dataKey="name" fill="#8884d8" />
          <Line dataKey="priceUsd" fill="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  }