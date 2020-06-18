import React from 'react'
import { Button, Typography, Box, Link } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles"
import { positions, flexbox } from "@material-ui/system";
import MenuIcon from '@material-ui/icons/Menu';
import logo from "./images/Stellated-Dodecahedron-white.png";

export default function Header() {
    return (
        <header>
            <Box mx="auto" position="relative" display="flex" top={30} width="95%" justifyContent="space-between">
                <MenuIcon></MenuIcon>
                <Box>
                    <Button variant="text" component={Link || "a"}>
                        EXPLORE
                    </Button>
                    <Button variant="text" component={Link || "a"}>
                        LOG IN
                    </Button>
                </Box>
            </Box>
        </header>
    )
}
