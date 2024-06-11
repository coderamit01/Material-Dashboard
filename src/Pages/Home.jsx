import React from 'react';
import { Box, Typography } from '@mui/material';

const Home = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard Content
      </Typography>
      <Typography variant="body1">
        This is where your main dashboard content will go.
      </Typography>
    </Box>
  );
};

export default Home;
