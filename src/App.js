import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Templates
import Navbar from './components/landing/Navbar';
import Landing from './components/landing/Landing';
import Footer from './components/landing/Footer';

// User
import Login from './components/user/Login';
import Register from './components/user/Register';
import Alert from './components/layout/Alert';

// User Loaded
import Dashboard from './components/dashboard/Dashboard';

// Create Events
import Create from './components/user/Create';
import Details from './components/user/Details';

//Redux
import { Provider } from 'react-redux';
import Store from './Store';
import { loadUser } from './actions/auth';
import setAuthToken from './Utils/setAuthToken';

import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    Store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={Store}>
      <Router>
        <Switch>
          <Fragment>
            <Navbar />
            <Route exact path="/" component={Landing} />
            <section className="container mt-5">
              <Alert />
              <Route exact path="/Login" component={Login} />
              <Route exact path="/Register" component={Register} />
            </section>
            <section className="container mt-5">
              <Route exact path="/Dashboard" component={Dashboard} />
              <Route exact path="/Dashboard/Create-Events" component={Create} />
              <Route exact path="/Dashboard/Create-Events-2" component={Details} />
            </section>
            <Footer />
          </Fragment>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
