import React, { PureComponent } from 'react';

interface State {
    time: string;
}

class Clock extends PureComponent<object, State> {
    private timerID?: number;

    constructor(props: object) {
        super(props);
        this.state = {
            time: new Date().toLocaleTimeString(),
        };
    }

    componentDidMount() {
        this.timerID = setInterval(() => {
            this.setState({ time: new Date().toLocaleTimeString() });
        }, 1000);
    }

    componentWillUnmount() {
        if (this.timerID) {
            clearInterval(this.timerID);
        }
    }

    render() {
        return (
            <div>
                <h2>Current Time: {this.state.time}</h2>
            </div>
        );
    }
}

export default Clock;
