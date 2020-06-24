import React from 'react';
import { Typography, Box } from '@material-ui/core';

function Model() {
  return (
    <>
      <Box mx="auto" width="50%">
        <Typography variant="body1">
          You can reach us at the following addresses:
        </Typography>
      </Box>
      <Box mx="auto" width="50%">
        <Typography variant="body1">research@supernova.ac</Typography>
      </Box>
      <Box mx="auto" width="50%">
        <Typography variant="body1">wyf@supernova.ac</Typography>
      </Box>
      <Box mx="auto" width="50%">
        <Typography variant="body1">zm@supernova.ac</Typography>
      </Box>
    </>
  );
}

export default Model;
