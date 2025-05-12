import axios from 'axios';

const BASE_URL = "http://20.244.56.144/evaluation-service";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ3MDU0NjY4LCJpYXQiOjE3NDcwNTQzNjgsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjlmOWYxYzVhLTljODEtNDc4Yy1iZWJkLTJmMGQyY2E0ODNhYyIsInN1YiI6ImNiLmVuLnU0Y3NlMjI1MThAY2Iuc3R1ZGVudHMuYW1yaXRhLmVkdSJ9LCJlbWFpbCI6ImNiLmVuLnU0Y3NlMjI1MThAY2Iuc3R1ZGVudHMuYW1yaXRhLmVkdSIsIm5hbWUiOiJqZWV0IHRoYWt1ciIsInJvbGxObyI6ImNiLmVuLnU0Y3NlMjI1MTgiLCJhY2Nlc3NDb2RlIjoiU3d1dUtFIiwiY2xpZW50SUQiOiI5ZjlmMWM1YS05YzgxLTQ3OGMtYmViZC0yZjBkMmNhNDgzYWMiLCJjbGllbnRTZWNyZXQiOiJjcmZmSG1mREJnWnZtZnBwIn0.955Ok6HJfCH_nR00F_MdeU44fTJpaTqZkGh-GTgJzQQ"; 

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`
  }
});

// Get all stock names and symbols
export const getStocks = async () => {
  const response = await axiosInstance.get('/stocks');
  return response.data.stocks;
};

// Get recent price(s) of a stock
export const getStockPrices = async (stockSymbol, minutes = null) => {
  let endpoint = `/stocks/${stockSymbol}`;
  if (minutes) {
    endpoint += `?minutes=${minutes}`;
  }
  const response = await axiosInstance.get(endpoint);
  return response.data;
};
