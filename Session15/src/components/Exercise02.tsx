import React, { PureComponent } from 'react'

interface Props {}
interface Color{
    Basecolor: string;
}
interface State {
    color: Color;
    showColor: boolean;
}

class Exercise02 extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            color: { Basecolor: '' },
            showColor: false
        }
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            color: { Basecolor: event.target.value },
            showColor: false
        })
    }

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.setState({ showColor: true });
    }
    render() {
        return (
            <>
                <h1>Color : {this.state.showColor ? this.state.color.Basecolor : ''}</h1>
                <h3>form</h3>
                <form onSubmit={this.handleSubmit}>
                    <h4>mau sac</h4>
                    <input type="color" name='color' onChange={this.handleChange}/>
                    <button type='submit'>Change Color</button>
                </form>
            </>
        )
    }
}

export default Exercise02
