import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import HelpIcon from '@material-ui/icons/Help';
import ListIcon from '@material-ui/icons/List';

import './style.css';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    fontSize: '18px',
    marginTop: '30px'
  },
  icon: {
    marginRight: '5px'
  }
}));

const Footer = ({ type }) => {
  const classes = useStyles();
  if (type === 'main')
    return (
      <div className={'footer'}>
        <Container maxWidth="lg">
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          ></Grid>
        </Container>
      </div>
    );
  else
    return (
      <div className="footer">
        <Container maxWidth="lg">
          <Grid
            container
            direction="row"
            spacing={1}
            // justify="space-between"
            alignItems="center"
          >
            <Grid item xs={12} md={2}>
              <Typography variant="h4" component="h4" className={classes.title}>
                <LocationOnIcon className={classes.icon} fontSize="small" />
                Top locations
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="h4" component="h4" className={classes.title}>
                <ListIcon className={classes.icon} fontSize="small" />
                Top Categories
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="h4" component="h4" className={classes.title}>
                <HelpIcon className={classes.icon} fontSize="small" />
                Support
              </Typography>
            </Grid>
            <Grid item xs={12} md={3}></Grid>
            <Grid item xs={12} md={3}></Grid>
          </Grid>
        </Container>
      </div>
    );
};

export default Footer;
