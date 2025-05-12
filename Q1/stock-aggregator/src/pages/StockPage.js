import React, { useEffect, useState } from 'react';
import StockChart from '../components/StockChart';
import axios from 'axios';

const StockPage = () => {
  const [stockData, setStockData] = useState({});
  const [symbols, setSymbols] = useState([]);
  const [selectedSymbol, setSelectedSymbol] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchSymbols = async () => {
    try {
      const response = await axios.get('http://20.244.56.144/evaluation-service/stocks');
      const symbolsMap = response.data.stocks;
      setSymbols(Object.entries(symbolsMap));
    } catch (error) {
      console.error('Error fetching stock symbols:', error);
    }
  };

  const fetchStockHistory = async (symbol) => {
    try {
      setLoading(true);
      const response = await axios.get(`http://20.244.56.144/evaluation-service/stocks/${symbol}?minutes=50`);
      setStockData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching stock data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSymbols();
  }, []);

  useEffect(() => {
    if (selectedSymbol) fetchStockHistory(selectedSymbol);
  }, [selectedSymbol]);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Select a Stock</h2>
      <select value={selectedSymbol} onChange={(e) => setSelectedSymbol(e.target.value)}>
        <option value="">-- Choose a stock --</option>
        {symbols.map(([name, symbol]) => (
          <option key={symbol} value={symbol}>
            {name} ({symbol})
          </option>
        ))}
      </select>

      {loading && <p>Loading data...</p>}

      {!loading && stockData.length > 0 && (
        <StockChart data={stockData} symbol={selectedSymbol} />
      )}
    </div>
  );
};

export default StockPage;
