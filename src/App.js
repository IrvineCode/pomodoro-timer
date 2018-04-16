import React, { Component } from 'react';
import './App.css';

import Menu from './components/Menu';
import Timer from './containers/Timer';
// import DataCollection from './utils/DataCollection';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startTime: undefined
      // data: [],
      // newText: "",
      // loading: false
    };

    this.handleClick = this.handleClick.bind(this);

    // this.loadData();
  };

  handleClick(event) {
    if (this.state.startTime) {
      let stop = window.confirm("Are you sure you want to stop the timer?");
      if (stop) {
        this.setState({ startTime: undefined });
      }
    } else {
      this.setState({ startTime: new Date().getTime() });
    }
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
        <Timer startTime={this.state.startTime} />
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
