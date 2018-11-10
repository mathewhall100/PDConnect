import React, { Component } from "react";
import Routes from './Routes';
import "./App.css";
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import  AppBar from './components/AppBar';
import Footer from './components/home/footer';
import { ParallaxProvider } from 'react-scroll-parallax';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar />
        <ParallaxProvider>
          <div className='content-holder'>
            <Routes {...this.props} />
          </div>
        </ParallaxProvider>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = state => {
  //console.log("state in app.js : ", state);
  return state;

}

export default withRouter(connect(mapStateToProps)(App));
