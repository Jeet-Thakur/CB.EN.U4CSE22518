import axios from 'axios';

const API_BASE_URL = 'http://localhost:9876';
const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ3MDU0NjY4LCJpYXQiOjE3NDcwNTQzNjgsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjlmOWYxYzVhLTljODEtNDc4Yy1iZWJkLTJmMGQyY2E0ODNhYyIsInN1YiI6ImNiLmVuLnU0Y3NlMjI1MThAY2Iuc3R1ZGVudHMuYW1yaXRhLmVkdSJ9LCJlbWFpbCI6ImNiLmVuLnU0Y3NlMjI1MThAY2Iuc3R1ZGVudHMuYW1yaXRhLmVkdSIsIm5hbWUiOiJqZWV0IHRoYWt1ciIsInJvbGxObyI6ImNiLmVuLnU0Y3NlMjI1MTgiLCJhY2Nlc3NDb2RlIjoiU3d1dUtFIiwiY2xpZW50SUQiOiI5ZjlmMWM1YS05YzgxLTQ3OGMtYmViZC0yZjBkMmNhNDgzYWMiLCJjbGllbnRTZWNyZXQiOiJjcmZmSG1mREJnWnZtZnBwIn0.955Ok6HJfCH_nR00F_MdeU44fTJpaTqZkGh-GTgJzQQ';

// Create an axios instance with default headers
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 500,
  headers: {
    'Authorization': `Bearer ${AUTH_TOKEN}`,
    'Content-Type': 'application/json'
  }
});

export const fetchNumbers = async (numberType) => {
  try {
    const response = await apiClient.get(`/numbers/${numberType}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching numbers:', error);
    // Return a more detailed error message
    if (error.response) {
      // The request was made and the server responded with a status code
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
      console.error('Response headers:', error.response.headers);
      throw new Error(`Server responded with status ${error.response.status}`);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('Request:', error.request);
      throw new Error('No response received from server');
    } else {
      // Something happened in setting up the request
      console.error('Error:', error.message);
      throw new Error('Error setting up request');
    }
  }
};