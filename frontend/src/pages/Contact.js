import React from 'react';
import { Typography, Box } from '@material-ui/core';

function Main() {
  return (
    <>
      <main>
        <Box my={5} mx="auto" width="50%">
          <Typography variant="body1">
            You can reach us at the following addresses:
          </Typography>
        </Box>
        <Box my={5} mx="auto" width="50%">
          <Typography variant="body1">research@supernova.ac</Typography>
        </Box>
        <Box my={5} mx="auto" width="50%">
          <Typography variant="body1">wyf@supernova.ac</Typography>
        </Box>
        <Box my={5} mx="auto" width="50%">
          <Typography variant="body1">zm@supernova.ac</Typography>
        </Box>
      </main>
    </>
  );
}

function Model() {
  return (
    <>
      <Main />
    </>
  );
}

export default Model;
