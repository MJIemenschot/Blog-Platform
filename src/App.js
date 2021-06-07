import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';
import Header from "./components/Header";
import Login from "./pages/Login";
import Home from  "./pages/Home";
import Blogposts from "./pages/Blogposts";
import Blog from "./pages/Blog";

function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated ] = useState(false);

  return (
    <Router>
     <Header />
    <div className="content-container">
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route  path="/blog-overzicht">
                <Blogposts />
            </Route>
            <Route path="/blog">
                <Blog />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
        </Switch>
    </div>


    </Router>
  );
}

export default App;
