import React from 'react';
import { Typography, Paper } from '@mui/material';

const About = () => {
  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        About Average Calculator
      </Typography>
      <Typography paragraph>
        This application interacts with an Average Calculator microservice that:
      </Typography>
      <Typography component="ul" paragraph>
        <Typography component="li">Accepts number IDs: 'p' for prime, 'f' for Fibonacci, 'e' for even, and 'r' for random numbers</Typography>
        <Typography component="li">Maintains a window of numbers (default size 10)</Typography>
        <Typography component="li">Calculates averages of numbers in the window</Typography>
        <Typography component="li">Responds within 500 milliseconds</Typography>
      </Typography>
      <Typography paragraph>
        The microservice fetches numbers from a third-party server and stores them, ensuring quick responses and maintaining the specified window size.
      </Typography>
    </Paper>
  );
};

export default About;