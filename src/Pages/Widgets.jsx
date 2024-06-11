import { Box, Typography } from '@mui/material';
import React from 'react';

const Widgets = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard Widgets
      </Typography>
      <Typography variant="body1">
        This is Widgets
      </Typography>
    </Box>
    </div>
  );
};

export default Widgets;