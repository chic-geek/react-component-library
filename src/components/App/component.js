import "./component.css";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SignUpForm from "../Examples/SignUpForm/component";
import SignInForm from "../Examples/SignInForm/component";
import SampleForm from "../Examples/SampleForm/component";

class App extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <h1>Form examples</h1>
          <nav>
            <ul>
              <li>
                <Link to="/sign-up">Sign up</Link>
              </li>
              <li>
                <Link to="/sign-in">Sign in</Link>
              </li>
              <li>
                <Link to="/sample">Sample</Link>
              </li>
            </ul>
          </nav>
          <Route path="/sign-up" component={SignUpForm} />
          <Route path="/sign-in" component={SignInForm} />
          <Route path="/sample" component={SampleForm} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
