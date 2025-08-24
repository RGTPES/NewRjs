import React, { PureComponent} from 'react'

interface Props {}
interface Email{
    email: string;
}
interface State {
   Email: Email;
}


class Exercise01 extends PureComponent<{}, State> {
    constructor(props: {}) {
        super(props)

        this.state = {
            Email: {
                email: ''
            }
        }
    }
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        this.setState(() => ({
            Email: {
                ...this.state.Email,
                [name]: value
            }
        }));
    };
    render() {
        return (
            <>
            <form action="" onSubmit={(e) => {
                e.preventDefault();
                console.log(this.state.Email);
            }}>
                <h1>Form</h1>
                <h3>Email</h3>
                <div>
                     <input type="email" name="email" onChange={this.handleChange} />
                </div>
                <button type="submit">Submit</button>

            </form>
            </>
        )
    }
}
export default Exercise01
