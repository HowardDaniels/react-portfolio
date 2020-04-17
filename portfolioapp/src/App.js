import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Redirect launches the signup page when the app starts */}
          {/* <Redirect exact from="/" to="/login" />
          <Route exact path="/signup" component={SignUp} /> 
          <Route exact path="/login" component={Login} /> 
          <Route path="/searchconcert" component={withAuth(SearchConcert)} />
          <Route path="/profile" component={withAuth(Profile)} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
