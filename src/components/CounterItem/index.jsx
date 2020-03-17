import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    borderBottom: '1px solid #F8F5FA',
    flexGrow: 1
  },
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  },
  button: {
    backgroundColor: '#F8F5FA',
    border: '1px solid #7A49A0'
  },
  counterInput: {
    maxWidth: '50px',
    maxHeight: '50px',
    padding: '5px'
  }
}));

const CounterItem = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item md={9}>
          <Typography variant="h5">Block Y20</Typography>
          <Typography variant="h6">(£20)</Typography>
        </Grid>
        <Grid item md={3}>
          <Fab
            size="small"
            aria-label="remove"
            className={`${classes.margin} ${classes.button}`}
          >
            <RemoveIcon />
          </Fab>
          <OutlinedInput defaultValue="1" className={classes.counterInput} />
          <Fab
            size="small"
            aria-label="add"
            className={`${classes.margin} ${classes.button}`}
          >
            <AddIcon />
          </Fab>
        </Grid>
      </Grid>
    </div>
  );
};

export default CounterItem;
