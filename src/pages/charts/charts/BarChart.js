import React from "react";
import PropTypes from "prop-types";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const SimpleBarChart = (props) => {
  return (
    <ResponsiveContainer height={300} width="100%">
      <BarChart
        width={600}
        height={300}
        data={props.data}
        margin={{ top: 20, left: -10 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" orientation="left" stroke="#f3c363" />
        <YAxis yAxisId="right" orientation="right" stroke="#eb3349" />
        <Tooltip />
        <Legend />
        <Bar yAxisId="left" dataKey="pv" fill="#f3c363" />
        <Bar yAxisId="right" dataKey="uv" fill="#eb3349" />
      </BarChart>
    </ResponsiveContainer>
  );
};

SimpleBarChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      uv: PropTypes.number,
      pv: PropTypes.number,
    })
  ).isRequired,
};

export default SimpleBarChart;
