import React from 'react';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  }
}));

const Inputs = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <InputLabel color="primary">First Name</InputLabel>
      <FilledInput />
      <InputLabel color="primary">Last Name</InputLabel>
      <FilledInput />
    </div>
  );
};

export default Inputs;
