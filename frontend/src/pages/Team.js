import React from 'react';
import { Typography, Box } from '@material-ui/core';

function Title() {
  return (
    <>
      <Box my={10}>
        <Typography variant="h4" align="center">
          OUR TEAM
        </Typography>
      </Box>
    </>
  );
}

function Main() {
  return (
    <>
      <main>
        <Box my={5} mx="auto" width="50%">
          <Typography variant="h5">Founders:</Typography>
        </Box>
        <Box my={5} mx="auto" width="50%">
          <Typography variant="body1">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </Typography>
        </Box>
        <Box my={5} mx="auto" width="50%">
          <Typography variant="body1">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </Typography>
        </Box>
        <Box my={5} mx="auto" width="50%">
          <Typography variant="h5">Developers:</Typography>
        </Box>
        <Box my={5} mx="auto" width="50%">
          <Typography variant="body1">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </Typography>
        </Box>
        <Box my={5} mx="auto" width="50%">
          <Typography variant="body1">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </Typography>
        </Box>
        <Box my={5} mx="auto" width="50%">
          <Typography variant="h5">Designers and artists:</Typography>
        </Box>
        <Box my={5} mx="auto" width="50%">
          <Typography variant="body1">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </Typography>
        </Box>
      </main>
    </>
  );
}

function Team() {
  return (
    <>
      <Title />
      <Main />
    </>
  );
}

export default Team;
