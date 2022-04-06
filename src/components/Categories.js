import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';


import {Divider,Card} from '@mui/material/';

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { makeStyles } from '@mui/styles';

import { List } from '@mui/material/';



const useStyles = makeStyles({
    Categories: {
        display:"flex",
        alignItems:"center",
        flexDirection:"column",
        boxSizing: 'border-box',
        marginTop:"8px",
        boxSizing: 'border-box',
        minWidth:"fit-content"
    },

})


export default function Categories() {
    const classes = useStyles();


    return (
        <Card className={classes.Categories}>
            <Typography variant="h5"><b>Categories</b></Typography>
            <Divider />
            <List sx={{ }}>
                <ListItem button >
                    <ListItemText primary={"tool.name"} />
                </ListItem>
                <ListItem button >

                    <ListItemText primary={"tool.name"} />
                </ListItem>
                <ListItem button >

                    <ListItemText primary={"tool.name"} />
                </ListItem>


            </List>


        </Card>
    );
}
