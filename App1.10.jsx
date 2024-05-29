import React, { useState } from 'react';
import Button from './Button';
import StatisticLine from './StatisticLine';

const App = () => {
  // Tilan määrittely
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // Funktiot palautteen käsittelyyn
  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  // Lasketaan yhteenlaskettu määrä
  const total = good + neutral + bad;

  // Lasketaan keskiarvo
  const average = total === 0 ? 0 : (good - bad) / total;

  // Lasketaan positiivisen palautteen prosenttiosuus
  const positivePercentage = total === 0 ? 0 : (good / total) * 100;

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleGoodClick} text="Good" />
      <Button handleClick={handleNeutralClick} text="Neutral" />
      <Button handleClick={handleBadClick} text="Bad" />

      <h2>Statistics</h2>
      {total === 0 ? (
        <p>No feedback given</p>
      ) : (
        <div>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="Total" value={total} />
          <StatisticLine text="Average" value={average.toFixed(1)} />
          <StatisticLine text="Positive" value={`${positivePercentage.toFixed(1)}%`} />
        </div>
      )}
    </div>
  );
};

export default App;
