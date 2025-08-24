import React, { PureComponent } from 'react'

interface Props {}
interface Date{
    value: string;
    isShow: boolean;
}
interface State {
    date: Date;
}

class Exercise04 extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            date: {
                value: '',
                isShow: false
            }
        }
    }
handleChange=(event: React.ChangeEvent<HTMLInputElement>)=>{
    const { value } = event.target;
    this.setState({ date: { ...this.state.date, value } });
}
handleSubmit=(event: React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    this.setState({ date: { ...this.state.date, isShow: true } });

}
    render() {
        return (
            <>
            <h1>Tien do hoan thanh : {this.state.date.isShow ? this.state.date.value : ``} %</h1>
            <form action="" onSubmit={this.handleSubmit}>
                <input type="range" onChange={this.handleChange} />
                <button type="submit">Submit</button>
            </form>
            </>
        )
    }
}

export default Exercise04
