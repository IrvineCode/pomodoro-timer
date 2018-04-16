import React from 'react';

export default class Timer extends React.Component  {
    constructor(props) {
        super(props);

        this.state = {
            startTime: this.props.startTime,
            elapsed: 0,
            minLeft: 0,
            secLeft: 0
        };
        
        this.updateTime = this.updateTime.bind(this);

        setInterval(this.updateTime, 1000);
    };

    updateTime() {
        if (this.startTime === undefined) return;
        let countDownTime = this.getEndTime();
    
        let now = this.state.time.getTime();
        let timeLeft = countDownTime - now;
        this.setState({
            minLeft: Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
            secLeft: Math.floor((timeLeft % (1000 * 60)) / 1000)
        });
    };

    getEndTime() {
        let now = new Date(this.state.time.valueOf());
        now.setTime(now.getTime() + 1500000);
        return now.getTime();
    };

    render() {
        return (
            <div>
                <h2>{this.state.minLeft + "m " + this.state.secLeft + "s"}</h2>
            </div>
        );
    };
};
