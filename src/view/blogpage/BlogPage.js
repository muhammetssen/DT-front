import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {Box,Divider} from '@mui/material/';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import { makeStyles } from '@mui/styles';

export default function BlogPage({blogPost}) {
 
    const useStyles = makeStyles({
        content: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "0 20px",
            border:'1px solid black',
            padding:"20px",
        },
    })
    const classes = useStyles();



    return (
        <>
            <Box className={classes.content}>
                <h1>{blogPost.title}</h1>
                <Divider style={{width:'100%'}} />
                <p>
                    {blogPost.content}
                </p>


            </Box>
        </>


    );
}
