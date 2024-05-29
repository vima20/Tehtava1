// Statistics.jsx
import React from 'react';
import StatisticLine from './StatisticLine'; // Check this path

const Statistics = ({ good, neutral, bad, total, average, positivePercentage }) => {
  return (
    <div>
      <h2>Statistics</h2>
      {total === 0 ? (
        <p>No feedback given</p>
      ) : (
        <table>
          <tbody>
            <StatisticLine text="Good" value={good} />
            <StatisticLine text="Neutral" value={neutral} />
            <StatisticLine text="Bad" value={bad} />
            <StatisticLine text="Total" value={total} />
            <StatisticLine text="Average" value={average.toFixed(1)} />
            <StatisticLine text="Positive" value={`${positivePercentage.toFixed(1)}%`} />
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Statistics;
