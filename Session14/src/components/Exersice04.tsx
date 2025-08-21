import React, { PureComponent } from 'react'

interface Props {
    userName?: string;
}
interface State {
    userName?: string;
}

class Exersice04 extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            userName: 'Hoc code de di lam'
        }
    }
    handleChange = () => {
        this.setState({
            userName: this.state.userName === 'Hoc code de di lam' ? 'Hoc code se thanh cong' : 'Hoc code de di lam'
        })
    }

    
    shouldComponentUpdate(nextProps: Props, nextState: State) {
        return false;
    }
    render() {
        return (
            <>
                <h1>Company: {this.state.userName}</h1>
                <button onClick={this.handleChange}>change state</button>

            </>
        )
    }
}

export default Exersice04


