import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  grow: {
    flex: 1
  },
  location: {
    textAlign: 'left',
    color: '#4F5157',
    fontSize: '20px'
  },
  attraction: {
    textAlign: 'left',
    fontWeight: 'bold'
  },
  attractionDesc: {
    textAlign: 'left',
    color: '#4F5157',
    fontSize: '16px',
    fontFamily: 'Heebo'
  },
  card: {
    margin: '10px'
  },
  cardAction: {
    background: '#F8F5FA',
    padding: '15px'
  },
  price: {
    color: '#7A49A0',
    fontWeight: 'bold'
  }
});

const CardItem = ({ card }) => {
  const { title, imageUrl, type, desc, price } = card;
  const classes = useStyles();
  if (type === 'destination')
    return (
      <div>
        {card ? (
          <Card className={classes.card}>
            <CardMedia
              style={{ height: 0, paddingTop: '56.25%' }}
              image={imageUrl}
              title={title}
            />
            <CardContent>
              <Typography component="p" className={classes.location}>
                <LocationOnIcon color="primary" fontSize="small" /> {title}
              </Typography>
            </CardContent>
          </Card>
        ) : null}
      </div>
    );
  else if (type === 'category')
    return (
      <div>
        {card ? (
          <Card className={classes.card}>
            <CardMedia
              style={{ height: 0, paddingTop: '56.25%' }}
              image={imageUrl}
              title={title}
            />
            <CardContent>
              <Typography component="p">
                {title}
                <ArrowForwardIosIcon color="secondary" fontSize="small" />
              </Typography>
            </CardContent>
          </Card>
        ) : null}
      </div>
    );
  else if (type === 'attraction')
    return (
      <div>
        {card ? (
          <Card className={classes.card}>
            <CardMedia
              style={{ height: 0, paddingTop: '56.25%' }}
              image={imageUrl}
              title={title}
            />
            <CardContent>
              <Typography component="h4" className={classes.attraction}>
                {title}
              </Typography>
              <Typography component="p" className={classes.attractionDesc}>
                {desc}
              </Typography>
            </CardContent>
            <CardActions className={classes.cardAction}>
              <Typography component="strong" className={classes.grow}>
                from <span className={classes.price}> &pound;{price}</span>
              </Typography>
              <Button
                variant="outlined"
                size="small"
                color="primary"
                href="#"
                target="_blank"
              >
                Book now
              </Button>
            </CardActions>
          </Card>
        ) : null}
      </div>
    );
  else return null;
};

export default CardItem;
