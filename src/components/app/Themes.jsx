import { createMuiTheme } from '@material-ui/core/styles';

const Themes = createMuiTheme({
  palette: {
    primary: {
      light: '#7A46A0',
      main: '#7A49A0',
      dark: '#5B456C',
      contrastText: '#FFFFFF'
    },
    secondary: {
      light: '#F5F5F6',
      main: '#7C7C7C',
      dark: '#4F5157',
      contrastText: '#000000'
    }
  },
  typography: {
    htmlFontSize: 14,
    fontFamily: 'Heebo',
    fontSize: 12
  },
  overrides: {
    MuiButton: {
      outlinedPrimary: {
        border: '2px solid #7A46A0'
      }
    },
    MuiIconButton: {
      root: {
        color: '#000000',
        fontSize: '20px',
        fontFamily: 'Heebo'
      }
    },
    MuiTypography: {
      body1: {
        fontSize: '20px'
      }
    },
    MuiStepLabel: {
      root: {
        borderRadius: '5px',
        border: '1px solid #EBE6EF'
      },
      label: {
        color: '#FFFFFF',
        padding: '10px 20px',
        '&$active': {
          backgroundColor: '#FFFFFF',
          padding: '12px 20px'
        },
        '&$completed': {
          backgroundColor: '#FFFFFF',
          padding: '12px 20px'
        }
      },
      labelContainer: {
        padding: '0'
      },
      iconContainer: {
        color: '#FFFFFF',
        paddingRight: '0',
        borderRight: '1px solid #EBE6EF'
      }
    },
    MuiStepper: {
      root: {
        backgroundColor: 'transparent'
      },
      horizontal: {
        backgroundColor: '#7A46A0'
      }
    },

    MuiFilledInput: {
      root: {
        padding: '0px',
        borderRadius: '12px',
        borderTopLeftRadius: '12px',
        borderTopRightRadius: '12px',
        backgroundColor: '#F8F5FA'
      },
      input: {
        padding: '10px 12px 10px',
        borderRadius: '12px',
        border: '1px solid #EBE6EF',
        '&:hover': {
          border: '1px solid #7A46A0'
        }
      },
      underline: {
        '&:before': {
          borderBottom: 'none'
        },
        '&:after': {
          borderBottom: 'none'
        },
        '&:hover:before': { borderBottom: 'none' },
        '&::focus': {
          borderBottom: 'none'
        }
      }
    },

    MuiPaginationItem: {
      outlined: {
        border: '1px solid #7A49A0'
      },
      outlinedPrimary: {
        '&$selected': {
          backgroundColor: '#7A49A0',
          color: '#FFF'
        },
        '&$hover': {
          backgroundColor: '#7A49A0',
          color: '#FFF'
        }
      },
      page: {
        '&:hover': {
          backgroundColor: '#7A49A0',
          color: '#FFFFFF'
        }
      }
    }
  }
});

export default Themes;
