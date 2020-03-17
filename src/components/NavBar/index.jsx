import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HelpIcon from '@material-ui/icons/Help';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  flex: {
    flex: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
}));

const NavBar = () => {
  const classes = useStyles();
  const [anchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    ></Menu>
  );

  const mobileMenuId = 'account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="cart">
          <ShoppingCartIcon color="primary" /> Cart
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="help">
          <HelpIcon color="primary" /> Help
        </IconButton>
      </MenuItem>
      <MenuItem>
        <Typography>ENG/GBP</Typography>
      </MenuItem>
    </Menu>
  );

  return (
    <div>
      <AppBar position="static" color="inherit">
        <Container maxWidth="lg">
          <ToolBar className="navbar">
            <Typography>
              <img
                className="logoImage"
                src="https://i.imgur.com/Dfcl950.png"
                alt="logo"
              />
            </Typography>

            <div className={classes.flex} />

            <div className={classes.sectionDesktop}>
              <IconButton color="inherit" aria-label="cart">
                <ShoppingCartIcon color="primary" fontSize="small" /> Cart
              </IconButton>
              <IconButton color="inherit" aria-label="help">
                <HelpIcon color="primary" fontSize="small" /> Help
              </IconButton>
              <IconButton>
                <Typography>ENG/GBP</Typography>
              </IconButton>
            </div>

            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
              >
                <MoreVertIcon />
              </IconButton>
            </div>
          </ToolBar>
        </Container>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
};

export default NavBar;
