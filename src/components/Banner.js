import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
    imageContainer: {
        width:"100%",
    },
    image:{
        objectFit:"cover",
        width:"100%",
        height:"200px"
    }

})
export default function Banner() {
    const classes = useStyles();

  return <>
  {itemData.map((item) => (
        <ImageListItem   className={classes.imageContainer} key={item.img}>
          <img className={classes.image}
            src={`https://images.unsplash.com/photo-1551963831-b3b1ca40c98e`} 
            alt={"Breakfast"}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </>
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  },
 
];
