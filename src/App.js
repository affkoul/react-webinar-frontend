import React, { useState } from 'react'

// jss & theme
import { create } from 'jss'
import rtl from 'jss-rtl'
import {
  ThemeProvider,
  StylesProvider,
  jssPreset,
} from '@material-ui/core/styles'
import theme from 'assets/theme'

// react router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from 'layouts/Home'

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] })

function App() {
  const [authToken, setAuthToken] = useState(localStorage.getItem('authToken'))

  return (
    <StylesProvider jss={jss}>
      <ThemeProvider theme={theme}>
        <Router basename={'/webinar'}>
          <Switch>
            <Route path="/">
              <Home authToken={authToken} setAuthToken={setAuthToken} />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </StylesProvider>
  )
}

export default App
