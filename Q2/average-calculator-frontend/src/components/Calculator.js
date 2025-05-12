import React, { useState, useEffect } from 'react';
import { fetchNumbers } from '../services/api';
import { 
  Box, 
  Button, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  Typography, 
  Paper,
  CircularProgress,
  Alert
} from '@mui/material';

const Calculator = ({ addToHistory }) => {
  const [numberType, setNumberType] = useState('p');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchNumbers(numberType);
      setResult(data);
      addToHistory(data);
    } catch (err) {
      setError(err.message || 'Failed to fetch numbers. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h5" gutterBottom>
        Number Calculator
      </Typography>
      
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Number Type</InputLabel>
        <Select
          value={numberType}
          label="Number Type"
          onChange={(e) => setNumberType(e.target.value)}
        >
          <MenuItem value="p">Prime Numbers</MenuItem>
          <MenuItem value="f">Fibonacci Numbers</MenuItem>
          <MenuItem value="e">Even Numbers</MenuItem>
          <MenuItem value="r">Random Numbers</MenuItem>
        </Select>
      </FormControl>
      
      <Button 
        variant="contained" 
        onClick={handleSubmit}
        disabled={loading}
        startIcon={loading ? <CircularProgress size={20} /> : null}
      >
        Calculate
      </Button>
      
      {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
      
      {result && (
        <Box sx={{ mt: 3 }}>
          <Typography variant="h6">Results:</Typography>
          <Typography>Previous Window: {JSON.stringify(result.windowPrevState)}</Typography>
          <Typography>Current Window: {JSON.stringify(result.windowCurrState)}</Typography>
          <Typography>Numbers Received: {JSON.stringify(result.numbers)}</Typography>
          <Typography>Average: {result.avg.toFixed(2)}</Typography>
        </Box>
      )}
    </Paper>
  );
};

export default Calculator;