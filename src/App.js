import React, { Component } from 'react';
import './App.css';

import Menu from './components/Menu';

// import DataCollection from './utils/DataCollection';

const History = ({history}) => {
  return (
    <div>
      <h3>history</h3>
      {
        history.map((data,i) => (
          <div key={i} className="history">
            <div>{parseInt(data/60)}m {data%60}s</div>
            <div>
              <div className="meter" style={{
                width: (data/60/25*100) + "%"
              }}></div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startTime: undefined,
      elapsed: 0,
      minLeft: 25,
      secLeft: 0,
      history: [36, 180, 60*24, 5]

      // data: [],
      // newText: "",
      // loading: false
    };

    this.setState.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.updateTime = this.updateTime.bind(this);

    setInterval(this.updateTime, 1000);

    // this.loadData();
  };

  handleClick(event) {
    if (this.state.startTime) {
      let stop = window.confirm("Are you sure you want to stop the timer?");
      if (stop) {
        this.setState({
          startTime: undefined,
          elapsed: 0,
          history: this.state.history.concat([this.state.elapsed/1000])
        });
      }
    } else {
      this.setState({
        startTime: new Date().getTime(),
        elapsed: 0
      });
    }
  };

  updateTime() {
    if (this.state.startTime === undefined) return;

    let timeLeft = (25 * 60 * 1000) - this.state.elapsed;
    if (timeLeft === 0) {
      window.alert("Pomodoro session is over, take a 5 min break!");
      this.setState({
        startTime: undefined,
        elapsed: 0
      });
      return;
    }

    this.setState({
      elapsed: this.state.elapsed + 1000,
      minLeft: Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
      secLeft: Math.floor((timeLeft % (1000 * 60)) / 1000)
    });
  };

  render() {
    return (
      <div className="container">
        <Menu />
        <br />
        <div><h1>Pomodoro Timer</h1></div>
        <h2>{this.state.minLeft + "m " + this.state.secLeft + "s"}</h2>
        <button type="button" className="btn btn-info" onClick={this.handleClick}>{(this.state.startTime === undefined) ? "Start Timer" : "Stop Timer"}</button>
        <hr />
        <History history={this.state.history} />
      </div>
    );
  };
};

export default App;
