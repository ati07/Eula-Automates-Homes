import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Card.css'
const useStyles = makeStyles({
  root: {
    maxWidth: 570,
    backgroundColor:'#cecdb5',
    textAlign: 'left',
    boxShadow:'none'
  },
  button:{
    backgroundColor:'#52534e'
  },
  media: {
    height: 400,
    width:559,
    boxShadow: '5px 5px 10px 0px rgb(37 37 37)',
    border:'none',
  },
  content:{
    display:''
  }
});

export default function MyCard({url}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={url}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2" >
              <Button className={classes.button}>
            KITCHEN
            </Button>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Now you can get your dream kitchen with our innovative approach to custom cabinetry. You are only a few steps away from transforming a crucial part of your home into an elegant, personalized, and productive space.
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
  );
}
