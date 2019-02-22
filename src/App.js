import React, { Component } from "react";
import "./App.css";
import Navbar from './components/navbar';
import LandingPage from './components/landingpage';
import AboutMe from './components/aboutme';
import Gallery from './components/gallery';
import Register from './components/register';
import Resume from './components/resume';
import { Switch, Route, withRouter} from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/aboutme" component={AboutMe} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/Register" component={Register} />
        </Switch>
      </div>
    );
  }
}

export default App;
