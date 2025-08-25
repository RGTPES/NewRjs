import React, { PureComponent } from 'react';

interface State {
    count: number;
}

class ClickCounter extends PureComponent<object, State> {
    constructor(props: object) {
        super(props);
        this.state = {
            count: 0
        };
    }

    handleClick = () => {
        this.setState(prev => ({ count: prev.count + 1 }));
    };

    render() {
        return (
            <div>
                <h2>count: {this.state.count}</h2>
                <button onClick={this.handleClick}>Click me</button>
            </div>
        );
    }
}

export default ClickCounter;
