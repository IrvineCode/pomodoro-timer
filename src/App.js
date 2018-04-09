import React, { Component } from 'react';
import './App.css';

import Menu from './components/Menu';
import DataCollection from './utils/DataCollection';
import Timer from './containers/Timer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      started: false,
      newText: "",
      loading: false
    };

    this.loadData();
  };

  async loadData() {
    let data = await DataCollection.list();
    this.setState({data});
  };

  render() {
    let startTimer = () => {
      this.setState({started: true});
    };

    return (
      <div className="container">
        <Menu />
        {/* <DBTest /> */}
        <div><h1>Pomodoro Timer v{parseInt(Math.random()*101, 10)}</h1></div>
        <Timer started={this.state.started} />
        <button type="button" className="btn btn-info" onClick={startTimer}>{this.state.started ? "Stop Timer" : "Start Timer"}</button>
        {this.state.data.map(doc => {
          return (
            <div>
              <span>{doc.id} - {doc.text}</span>
            </div>
          )
        })}

        <div>
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

        <div className={"loadingScreen " + this.state.loading ? "active" : ""}>
          <div className="fa-3x">
            <i className="fas fa-spinner fa-pulse"></i>
          </div>
        </div>

      </div>
    );
  };
};

export default App;
