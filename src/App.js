import React, { Component } from 'react';
import './App.css';

import Menu from './components/Menu';
import DBTest from './containers/DBTest';
import Timer from './containers/Timer';

// import * as firebase from "firebase";
// require("firebase/firestore");

// const config = {
//   apiKey: "AIzaSyDjXSOyhV_3KC4KwT3loQmTMdMtFXMXWPs",
//   authDomain: "pomodoro-timer-da0c2.firebaseapp.com",
//   databaseURL: "https://pomodoro-timer-da0c2.firebaseio.com",
//   projectId: "pomodoro-timer-da0c2",
//   storageBucket: "pomodoro-timer-da0c2.appspot.com",
//   messagingSenderId: "443216851048"
// };
// firebase.initializeApp(config);

class App extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div className="container">
        <Menu />
        {/* <DBTest /> */}
        <div><h1>Pomodoro Timer v{parseInt(Math.random()*101)}</h1></div>
        <Timer />
        <button type="button" className="btn btn-info">Start Timer</button>
      </div>
    );
  };
};

export default App;
