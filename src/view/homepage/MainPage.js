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
import { Toolbar } from '@mui/material';
import BlogCard from '../../components/BlogCard';
export default function MainPage() {
    const airlineList=[
        {
            "site": "https://subus.cl/",
            "code": "SUBUS",
            "alliance": "none",
            "phone": "",
            "name": "SuBús",
            "usName": null,
            "__clazz": "com.r9.harmony.httpd.mobileapis.AirlineMobile",
            "defaultName": null,
            "logoURL": "/rimg/provider-logos/airlines/v/SUBUS.png?crop=false&width=108&height=92&fallback=default1.png&_v=cf7f153576dad48e814135373e3baf34"
          },
          {
            "site": "sitasudtrasporti.it",
            "code": "SITASUD",
            "alliance": "none",
            "phone": "",
            "name": "SITA Sud",
            "usName": null,
            "__clazz": "com.r9.harmony.httpd.mobileapis.AirlineMobile",
            "defaultName": null,
            "logoURL": "/rimg/provider-logos/airlines/v/SITASUD.png?crop=false&width=108&height=92&fallback=default3.png&_v=8e634b2affd75b43a2cb1f32d857ccc2"
          },
          {
            "site": "https://www.avianca.com.ar",
            "code": "A0",
            "alliance": "none",
            "phone": "0810-333-8222",
            "name": "Avianca Argentina",
            "usName": null,
            "__clazz": "com.r9.harmony.httpd.mobileapis.AirlineMobile",
            "defaultName": null,
            "logoURL": "/rimg/provider-logos/airlines/v/A0.png?crop=false&width=108&height=92&fallback=default3.png&_v=67161f869e5c5d2f83dc8b38b95a7551"
          },
    ]

    const useStyles = makeStyles({
        MainPage: {
            height:"fit-content"

        },
        wrapper: {
            marginLeft: "20px"
        },
        content: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "0 20px"
        },
        cardWrapper:{
            display:"flex",
            width:"100%",
            flexDirection:"row",
            flexWrap:"wrap",
            padding:"0px",
            justifyContent:"space-between"
        }
    })
    const classes = useStyles();



    return (
        <>
            <Box className={classes.wrapper}>
                <Grid container className={classes.MainPage} spacing={2}>
                    <Grid item className={classes.side} xs={2}>
                        <Toolbar />
                        <Categories></Categories>
                    </Grid>
                    <Grid item xs={10}  >
                        <Box className={classes.content}>
                            <Typography variant="h2">Bugünün Yazıları</Typography>
                            <Banner></Banner>
                            <Box className={classes.cardWrapper}>

                            { airlineList.map((key,index)=>{
                                {     
                                    return <BlogCard className={classes.card}  airline={key}/>
                                }
                            })}
                           
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>




        </>


    );
}
