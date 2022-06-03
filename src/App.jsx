import React, { Component } from 'react';
import {} from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from './actions';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Header from './components/Header'
import Landing from './components/Landing'
import Dashboard from './components/Dashboard'
import NewSurvey from './components/NewSurvey' 

import './App.css'

class App extends Component {

  componentDidMount() {
    this.props.fetch_user();
    console.log(this.props.fetch_user);
  }

  render() {
    return (
      <>
        <Header />
          <BrowserRouter>
          <nav>
            <div className="nav-wrapper">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/surveys">Surveys</Link></li>
              </ul>
            </div>
          </nav>
            <Routes>
              <Route path="/" element={<Landing />}/>
              <Route path="/surveys" element={<Dashboard />} />
              <Route path="/surveys/new" element={<NewSurvey />} />
            </Routes>
          </BrowserRouter>
      </>
    );
  }
}

export default connect(null, actions)(App);
