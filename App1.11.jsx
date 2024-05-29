// App.jsx
import React, { useState } from 'react';
import Button from './Button';
import Statistics from './Statistics';

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
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        positivePercentage={positivePercentage}
      />
    </div>
  );
};

export default App;
