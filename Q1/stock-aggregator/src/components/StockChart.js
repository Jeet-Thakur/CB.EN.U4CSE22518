import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const StockChart = ({ data, symbol }) => {
  // Format timestamp for display
  const formattedData = data.map(point => ({
    ...point,
    lastUpdatedAt: new Date(point.lastUpdatedAt).toLocaleTimeString()
  }));

  return (
    <div style={{ marginTop: '2rem' }}>
      <h3>Price History for {symbol}</h3>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={formattedData}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="lastUpdatedAt" />
          <YAxis domain={['auto', 'auto']} />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#1976d2" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StockChart;
