import React, { Component } from 'react';
import './App.css';

import Menu from './components/Menu';

const MenuItem = (props) => <div>{props.text}</div>;

// const Menu = (props) => {
//   return (
//     <div className="menu">{props.items.map(item => <MenuItem text={item} />)}</div>
//   );
// };

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
    let menuItems = ['Settings', 'Feedback', 'About'];
    return (
      <div className="App">
        <Menu />
        {/* <Menu items={menuItems} /> */}
        <div>{Math.random()}</div>
        
      </div>
    );
  };
};

export default App;
