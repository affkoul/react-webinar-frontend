import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

// react router
import { Switch, Route, useLocation, Redirect } from 'react-router-dom'

// components
import Header from 'components/Header/Header'
import Homepage from 'components/Homepage/Homepage'
import Footer from 'components/Footer/Footer'
import Login from "components/Login/Login"
import Register from 'components/Register/Register'
import Panel from 'components/Panel/Panel'
import Webinar from 'components/Webinar/Webinar'
import WebinarDetail from 'components/Webinar/WebinarDetail'
import RequestWebinar from 'components/Webinar/RequestWebinar'

function Home({ authToken, setAuthToken }) {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])


  return (
    <>
      <Switch>
        <Route exact path="/">
          <Header menuOnBanner authToken={authToken} />
        </Route>
        <Route path="/">
          <Header authToken={authToken} />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/webinar">
          <Webinar />
        </Route>
        <Route exact path="/requestwebinar">
          <RequestWebinar />
        </Route>
        <Route path="/webinar/:id">
          <WebinarDetail />
        </Route>
        <Route path="/login">
          {authToken ? (
            <Redirect from="/login" to="/panel" />
          ) : (
            <Login setAuthToken={setAuthToken} />
          )}
        </Route>

        <Route exact path="/register">
          <Register />
        </Route>
        <Route path="/panel">
          {authToken ? (
            <Panel setAuthToken={setAuthToken} />
          ) : (
            <Redirect from="/panel" to="/login" />
          )}
        </Route>

      </Switch>

      <Footer />
    </>
  )
}

Home.defaultProps = {
  authToken: '',
}

Home.propTypes = {
  authToken: PropTypes.string,
  setAuthToken: PropTypes.func.isRequired,
}


export default Home
