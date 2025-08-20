import React, { PureComponent} from 'react'
type Props = {
    name?: string;
};
type State = {
    name?: string
};

class Exercises01 extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            name: 'Nguyễn Minh Sơn'
        }
    }

    render() {
        return (
            <div>Họ và Tên: {this.state.name}</div>
        )
    }
}

export default Exercises01
