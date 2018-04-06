import React from 'react';

export default class Timer extends React.Component  {
    constructor(props) {
        super(props);

        this.state = {
            time: new Date(),
            minLeft: undefined,
            secLeft: undefined
        };
    };

    onClickHandle() {
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
        return {now}.getTime();
    };

    render() {
        

        return (
            <div>
                {this.minLeft + "m " + this.secLeft + "s"}
            </div>
        );
    };
};
