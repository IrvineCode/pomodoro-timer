import React, { Component } from 'react';
import './App.css';

import Menu from './components/Menu';

// import DataCollection from './utils/DataCollection';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startTime: undefined,
      elapsed: 0,
      minLeft: 25,
      secLeft: 0

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
          elapsed: 0
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

  // async loadData() {
  //   let data = await DataCollection.list();
  //   this.setState({data});
  // };

  render() {
    return (
      <div className="container">
        <Menu />
        <br />
        {/* <DBTest /> */}
        <div><h1>Pomodoro Timer v{parseInt(Math.random()*101, 10)}</h1></div>
        {/* <Timer startTime={this.state.startTime} /> */}
        <h2>{this.state.minLeft + "m " + this.state.secLeft + "s"}</h2>
        <button type="button" className="btn btn-info" onClick={this.handleClick}>{(this.state.startTime === undefined) ? "Start Timer" : "Stop Timer"}</button>
        {/* {this.state.data.map(doc => {
          return (
            <div>
              <span>{doc.id} - {doc.text}</span>
            </div>
          )
        })} */}

        {/* <div>
          <input
            type="text"
            value={this.state.newText}
            onChange = { event => {
              this.setState({newText: event.target.value});
            }}
          />
          <button onClick={async () => {
            this.setState({loading: true});
            let item = {text: this.state.newText};
            let docref = await DataCollection.insert(item);
            let newData = [...this.state.data];

            item.id = docref.id;
            
            newData.push(item);
            this.setState({
              data: newData,
              newText: "",
              loading: false
            });
          }}>submit</button>
        </div>

        <div className={"loadingScreen" + this.state.loading ? " active" : ""}>
          <div className="fa-3x">
            <i className="fas fa-spinner fa-pulse"></i>
          </div>
        </div> */}

      </div>
    );
  };
};

export default App;
