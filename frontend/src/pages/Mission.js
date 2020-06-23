import React from 'react';
import { Typography, Box } from '@material-ui/core';

function Title() {
  return (
    <>
      <Box my={10}>
        <Typography variant="h4" align="center">
          OUR MISSION
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
          <Typography variant="h5">SuperNova's Mission:</Typography>
        </Box>
        <Box my={5} mx="auto" width="50%">
          <Typography variant="body1">
            At its core, SuperNova is a unique crowdfunding website for
            Scientific Research Projects providing the world's Scientists with
            an exciting new channel to receive the support required to carry out
            their vital research.
          </Typography>
        </Box>
        <Box my={5} mx="auto" width="50%">
          <Typography variant="body1">
            Unlike most crowdfunding platforms where donations are motivated by
            the promise of material gain, those who back projects on SuperNova
            will be given an exclusive educational opportunity to interact with
            the Scientists, gaining access to first hand commentary on cutting
            edge research.
          </Typography>
        </Box>
        <Box my={5} mx="auto" width="50%">
          <Typography variant="body1">
            By drawing on the inherent curiosity of the human mind and the
            fascination that Science provides it, SuperNova aims to become a
            thriving community providing a podium for Research to flourish,
            Scientists to collaborate, and for The People to play an active role
            in the advancement of Science itself.
          </Typography>
        </Box>

        <Box my={5} mx="auto" width="50%">
          <Typography variant="h5">More Mission:</Typography>
        </Box>
        <Box my={5} mx="auto" width="50%">
          <Typography variant="body1">
            At its core, SuperNova is a unique crowdfunding website for
            Scientific Research Projects providing the world's Scientists with
            an exciting new channel to receive the support required to carry out
            their vital research.
          </Typography>
        </Box>
        <Box my={5} mx="auto" width="50%">
          <Typography variant="body1">
            Unlike most crowdfunding platforms where donations are motivated by
            the promise of material gain, those who back projects on SuperNova
            will be given an exclusive educational opportunity to interact with
            the Scientists, gaining access to first hand commentary on cutting
            edge research.
          </Typography>
        </Box>
        <Box my={5} mx="auto" width="50%">
          <Typography variant="body1">
            By drawing on the inherent curiosity of the human mind and the
            fascination that Science provides it, SuperNova aims to become a
            thriving community providing a podium for Research to flourish,
            Scientists to collaborate, and for The People to play an active role
            in the advancement of Science itself.
          </Typography>
        </Box>
      </main>
    </>
  );
}

function Mission() {
  return (
    <>
      <Title />
      <Main />
    </>
  );
}

export default Mission;
