import React from 'react';
import Header from "./Header";
import Main from "./Main-mission";
import Footer from "./Footer";
import { Typography, Box } from '@material-ui/core';

function Title() {
    return (
        <div>
        <Box my={10}>
            <Typography variant="h4" align="center">
                OUR MISSION
            </Typography>
        </Box>
    </div>
    );
}

function App() {
    return (
        <div id="root">
            <Header />
            <Title />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
