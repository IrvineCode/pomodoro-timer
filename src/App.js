import React, { Component } from 'react';
import './App.css';

import Menu from './components/Menu';
import DBTest from './containers/DBTest';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date()
    };
  };

  onClickHandle() {
    let countDownTime = this.getEndTime();

    let now = this.state.time.getTime();
    let timeLeft = countDownTime - now;
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  };

  getEndTime() {
    let now = new Date(this.state.time.valueOf());
    now.setTime(now.getTime() + 1500000);
    return {now}.getTime();
  };

  render() {
    return (
      <div className="container">
        <Menu />
        <DBTest />
        <div><h1>Pomodoro Timer v{parseInt(Math.random()*101)}</h1></div>
        <button type="button" class="btn btn-info">Start Timer</button>
      </div>
    );
  };
};

export default App;
