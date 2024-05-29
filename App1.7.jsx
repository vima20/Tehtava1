import React, { useState } from 'react';

const App = () => {
  // Tilamuuttujat
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // Palautteen käsittelyfunktiot
  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };

  // Lasketaan yhteenlaskettu määrä
  const total = good + neutral + bad;

  // Lasketaan keskiarvo
  const average = total === 0 ? 0 : (good - bad) / total;

  // Lasketaan positiivisen palautteen prosenttiosuus
  const positivePercentage = total === 0 ? 0 : (good / total) * 100;

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={handleGoodClick}>Good</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleBadClick}>Bad</button>

      <h2>Statistics</h2>
      {total === 0 ? (
        <p>No feedback given</p>
      ) : (
        <div>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>All: {total}</p>
          <p>Average: {average.toFixed(1)}</p>
          <p>Positive: {positivePercentage.toFixed(1)}%</p>
        </div>
      )}
    </div>
  );
};

export default App;
