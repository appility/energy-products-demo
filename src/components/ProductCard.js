import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
  },
  media: {
    height: 240,
  },
});

export default function ProductCard(props) {
  const classes = useStyles();
  return (
  <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={`https://picsum.photos/600/480?${props.id}`}
          title={props.supplier}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            { props.supplier }
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            { props.description }
          </Typography>
        </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={props.backToProducts}>
          Back
        </Button>
      </CardActions>
    </Card>
    )
}