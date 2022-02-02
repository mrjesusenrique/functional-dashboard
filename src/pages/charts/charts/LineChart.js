import React from "react";
import PropTypes from "prop-types";
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

const SimpleLineChart = (props) => {
  return (
    <ResponsiveContainer height={300} width="100%">
      <LineChart data={props.data} margin={{ top: 20, left: -10 }}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#5d80f9"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="uv" stroke="#f3c363" />
      </LineChart>
    </ResponsiveContainer>
  );
};

SimpleLineChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      uv: PropTypes.number,
      pv: PropTypes.number,
    })
  ).isRequired,
};

export default SimpleLineChart;
