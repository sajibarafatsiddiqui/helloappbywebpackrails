// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Greeting from './greeting';

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Greeting} />
    </Router>
  );
};

export default App;
