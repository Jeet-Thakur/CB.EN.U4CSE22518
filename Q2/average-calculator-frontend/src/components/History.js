import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';

const History = ({ history }) => {
  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Calculation History
      </Typography>
      {history.length === 0 ? (
        <Typography>No calculations yet</Typography>
      ) : (
        <List>
          {history.map((item, index) => (
            <React.Fragment key={index}>
              <ListItem>
                <ListItemText
                  primary={`Request ${index + 1}`}
                  secondary={
                    <>
                      <div>Previous: {JSON.stringify(item.windowPrevState)}</div>
                      <div>Current: {JSON.stringify(item.windowCurrState)}</div>
                      <div>Numbers: {JSON.stringify(item.numbers)}</div>
                      <div>Average: {item.avg.toFixed(2)}</div>
                    </>
                  }
                />
              </ListItem>
              {index < history.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      )}
    </Paper>
  );
};

export default History;