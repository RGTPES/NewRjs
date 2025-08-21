import React, { PureComponent } from 'react';

interface State {
    userName: string;
}

class Exersice01 extends PureComponent<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            userName: "hi",
        };
    }

    render() {
        return (
            <div >
                Xin chào, tôi là: {this.state.userName}
            </div>
        );
    }
}

export default Exersice01;
