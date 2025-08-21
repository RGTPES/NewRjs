import React, { PureComponent } from 'react'

interface Props {
    userName?: string;
}
interface State {
    userName?: string;
}

class Exersice03 extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            userName: 'RikkeiSoft'
        }
    }
handleChange = () => {
        this.setState({
            userName: this.state.userName === 'RikkeiSoft' ? 'Rikkei Academy' : 'RikkeiSoft'
        })
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

export default Exersice03


