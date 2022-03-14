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

export default function BlogCard({airline}) {
const classes=useStyles()
const [info,setInfo]=React.useState(false)
const handleHover=()=>{
  setInfo(true)
}
const handleOut=()=>{
  setInfo(false)

}
  return (
    <Card  sx={{ maxWidth: 345,marginBottom:5 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={`https://images.unsplash.com/photo-1551963831-b3b1ca40c98e`}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
