import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Categories from '../../components/Categories';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import Banner from '../../components/Banner';
export default function MainPage() {

    const useStyles = makeStyles({
        MainPage: {
            // border: "2px solid grey",
            // borderRadius: "10px",
            // padding: "20px",
            // marginLeft:"300px"

        },
        content:{
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            margin:"0 20px"
        }

    })
    const classes = useStyles();



    return (
        <>
            

                <Grid container className={classes.MainPage} spacing={2}>
                    <Grid item xs={2}>
                        <Categories></Categories>
                    </Grid>
                    <Grid item xs={10}  >
                        <Box className={classes.content}>


                        <Typography variant="h2">Bugünün Yazıları</Typography>
                        <Banner></Banner>
                        </Box>
                    </Grid>
                </Grid>
           



        </>


    );
}
