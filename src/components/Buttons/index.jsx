import React from 'react';
import Button from '@material-ui/core/Button';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  }
}));

const Buttons = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary">
        Buy now
      </Button>

      <Button
        variant="contained"
        color="primary"
        endIcon={<ArrowForwardIosIcon fontSize="small" />}
      >
        Buy now
      </Button>

      <Button variant="outlined" color="primary">
        View more
      </Button>

      <Button
        variant="outlined"
        color="primary"
        endIcon={<ArrowForwardIosIcon fontSize="small" />}
      >
        View more
      </Button>

      <Button variant="outlined" color="primary" startIcon="">
        Book now
      </Button>

      <Button
        href="#text-buttons"
        color="secondary"
        endIcon={<ArrowForwardIosIcon fontSize="small" />}
      >
        See all categories
      </Button>

      <Button
        variant="contained"
        color="primary"
        endIcon={<ArrowForwardIosIcon fontSize="small" />}
      >
        Go
      </Button>
    </div>
  );
};

export default Buttons;
