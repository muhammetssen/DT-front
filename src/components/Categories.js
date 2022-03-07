import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';

import Divider from '@mui/material/Divider';

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { makeStyles } from '@mui/styles';

import { List } from '@mui/material/';



const useStyles = makeStyles({
    Categories: {
        border: "2px solid grey",
        borderRadius:"10px",
        padding: "20px",
        display:"flex",
        alignItems:"center",
        flexDirection:"column"
        // marginLeft:"300px"

    },

})


export default function Categories() {
    const classes = useStyles();



    return (
        <Box className={classes.Categories}>
            <Typography variant="h5"><b>Categories</b></Typography>
            <Divider />
            <List>

                <ListItem button key={"tool.enum"}>

                    <ListItemText primary={"tool.name"} />
                </ListItem>
                <ListItem button key={"tool.enum"}>

                    <ListItemText primary={"tool.name"} />
                </ListItem>
                <ListItem button key={"tool.enum"}>

                    <ListItemText primary={"tool.name"} />
                </ListItem>


            </List>


        </Box>
    );
}
