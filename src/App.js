import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { Row, Col } from 'react-bootstrap'
import NavContainer from './containers/NavContainer';


class App extends Component {

  render () {
    return (
      <Router>
        <React.Fragment>
          <NavContainer />
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <Row >
              <Col>1 of 3</Col>
              <Col>2 of 3</Col>
              <Col>3 of 3</Col>
            </Row>
          </header>
        </React.Fragment>
      </Router>
    );
  }
}

function mapDispatchToProps(dispatch) {
  // return { fetchProjects: () => dispatch(fetchProjects()) }
}

function mapStateToProps(state) {
  return { projects: state.projects, loading: state.loading }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
