import 'assets/fonts/iransans/fontiran.css'
import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  direction: 'ltr',
  typography: {
    fontFamily: 'IRANSans, roboto',
    fontSize: 14,
    htmlFontSize: 16,
    fontWeightUltraLight: 200,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    h1: {
      fontSize: 72,
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h2: {
      fontSize: 32,
      fontWeight: 500,
      lineHeight: 1.5,
    },
    h3: {
      fontSize: 28,
      fontWeight: 400,
      lineHeight: 1.5,
    },
    h4: {
      fontSize: 24,
      fontWeight: 400,
      lineHeight: 1.5,
    },
    h5: {
      fontSize: 20,
      fontWeight: 400,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: 18,
      fontWeight: 400,
      lineHeight: 1.5,
    },
    subtitle1: {},
    subtitle2: {},
    body1: {
      fontSize: 16,
      fontWeight: 200,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: 16,
      fontWeight: 200,
      lineHeight: 1.5,
    },
    button: {},
    caption: {},
    overline: {},
  },
  palette: {
    primary: {
      main: '#446067',
    },
    secondary: {
      main: '#5acfc3',
    },
    tertiary: {
      main: '#FAFDFF',
    },
    textColor: {
      main: '#484848',
    },
  },
  pageTopMargin: {
    marginTop: '70px',
    asideTop: '80px',
  },
})

// responsive theme
theme.typography.h1 = {
  ...theme.typography.h1,
  [theme.breakpoints.down('md')]: {
    fontSize: 56,
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: 40,
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: 24,
  },
}

export default theme
