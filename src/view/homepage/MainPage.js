import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Categories from '../../components/Categories';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';

export default function MainPage() {

    const useStyles = makeStyles({
        MainPage: {
            border: "2px solid grey",
            borderRadius: "10px",
            // padding: "20px",
            // marginLeft:"300px"

        },

    })
    const classes = useStyles();



    return (
        <>
            <Box >

                <Grid container spacing={10}>
                    <Grid item xs={2}>
                        {/* <Item>xs=8</Item> */}
                        <Categories></Categories>
                    </Grid>
                    <Grid item xs={10} className={classes.MainPage} >
                        {/* <Item>xs=4</Item> */}

                        <Typography variant="h2"><b>Hello</b></Typography>
                    </Grid>
                </Grid>
            </Box>



        </>


    );
}
