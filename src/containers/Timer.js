import React from 'react';

export default class Timer extends React.Component  {
    constructor(props) {
        super(props);

        this.state = {
            time: new Date(),
            minLeft: undefined,
            secLeft: undefined
        };

        setInterval(this.updateTime.bind(this), 1000);
    };

    updateTime() {
        if (!this.props.started) return;
        let countDownTime = this.getEndTime();
    
        let now = this.state.time.getTime();
        let timeLeft = countDownTime - now;
        this.setState({
            minLeft: Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
            secLeft: Math.floor((timeLeft % (1000 * 60)) / 1000)
        });
    };

    getEndTime = () => {
        let now = new Date(this.state.time.valueOf());
        now.setTime(now.getTime() + 1500000);
        return now.getTime();
    };

    render() {
        return (
            <div>
                <h2>{(this.state.minLeft === undefined) ? ('\n') : (this.state.minLeft + "m " + this.state.secLeft + "s")}</h2>
            </div>
        );
    };
};
