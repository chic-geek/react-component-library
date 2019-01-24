import "./component.css";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SignUpForm from "../Examples/SignUpForm/component";
import SignInForm from "../Examples/SignInForm/component";
import ExampleForm from "../Examples/ExampleForm/component";

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
                <Link to="/example">Example</Link>
              </li>
            </ul>
          </nav>
          <Route path="/sign-up" component={SignUpForm} />
          <Route path="/sign-in" component={SignInForm} />
          <Route path="/example" component={ExampleForm} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
