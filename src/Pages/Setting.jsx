import { Box, Typography } from '@mui/material';
import React from 'react';

const Settings = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard Setting
      </Typography>
      <Typography variant="body1">
        This is Setting
      </Typography>
    </Box>
    </div>
  );
};

export default Settings;