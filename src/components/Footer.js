import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import {CardActions,CardActionArea,CardMedia} from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ClassNames } from '@emotion/react';
import { makeStyles } from '@mui/styles';
const useStyles=makeStyles({
    icon:{
        width:"32px",
        hegiht:"32px",
        marginRight:"18px"
    },
    card:{
      display:"flex",
      alignItems:"center",
      justifyContent:"center"
    },
    extra:{
      display:"flex",
      flexDirection:"column"
    },
    subheader:{
      fontSize:"16px",
        fontWeight:"bold",
        color:"#192024"  
    },
})
    export default function Footer(){

        const classes=useStyles()
        return <>
        <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
      </footer>
        </>
    }