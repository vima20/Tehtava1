import React from 'react';

const Statistics = ({ good, neutral, bad }) => {
  // Lasketaan yhteenlaskettu määrä
  const total = good + neutral + bad;

  // Lasketaan keskiarvo
  const average = total === 0 ? 0 : (good - bad) / total;

  // Lasketaan positiivisen palautteen prosenttiosuus
  const positivePercentage = total === 0 ? 0 : (good / total) * 100;

  return (
    <div>
      <h2>Statistics</h2>
      {total === 0 ? (
        <p>No feedback given</p>
      ) : (
        <div>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Average: {average.toFixed(1)}</p>
          <p>Positive: {positivePercentage.toFixed(1)}%</p>
        </div>
      )}
    </div>
  );
};

export default Statistics;
