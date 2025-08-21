import React, { PureComponent } from 'react'

interface Props {
    name?: string;
}
interface State {
    gender: string;
}

class Exersice06 extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            gender: ''
        }
    }
     handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            gender: event.target.value
        });
    }
    render() {
        return (
            <>
            <form action="">
                <h2>Gioi tinh: {this.state.gender}</h2>
            <input type="radio" name="gender" value="male" onChange={this.handleChange} /> Nam
            <input type="radio" name="gender" value="female" onChange={this.handleChange} /> Nu
            <input type="radio" name="gender" value="other" onChange={this.handleChange} /> Khac
            </form>
            
            </>
        )
    }
}

export default Exersice06

