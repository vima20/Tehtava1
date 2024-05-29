// StatisticLine.jsx
import React from 'react';

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

export default StatisticLine;
