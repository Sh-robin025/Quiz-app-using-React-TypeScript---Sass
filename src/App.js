import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import PostDetail from './components/PostDetail';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/posts/:id" component={PostDetail} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
