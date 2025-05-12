import React, { useState } from 'react';
import Calculator from '../components/Calculator';
import History from '../components/History';

const Home = () => {
  const [history, setHistory] = useState([]);

  const addToHistory = (result) => {
    setHistory(prev => [result, ...prev].slice(0, 10)); // Keep last 10 items
  };

  return (
    <div>
      <Calculator addToHistory={addToHistory} />
      <History history={history} />
    </div>
  );
};

export default Home;