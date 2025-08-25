import React, { PureComponent } from 'react';

class UserForm extends PureComponent<{}, {
    name: string;
    email: string;
    age: string;
    error: string;
    showResult: boolean;
}> {
    state = {
        name: '',
        email: '',
        age: '',
        error: '',
        showResult: false
    };

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ [e.target.name]: e.target.value } as any);
    };

    handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();  
        const { email, age } = this.state;
        if (!email.includes('@')) {
            this.setState({ error: 'Email khong hop le', showResult: false });
            return;
        }
        if (Number(age) < 0) {
            this.setState({ error: 'Tuoi khong duoc am', showResult: false });
            return;
        }
        this.setState({ error: '', showResult: true });
    };

    handleReset = () => {
        this.setState({
            name: '',
            email: '',
            age: '',
            error: '',
            showResult: false
        });
    };

    render() {
        const { name, email, age, error, showResult } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Ten: </label>
                        <input name="name" value={name} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Email: </label>
                        <input name="email" value={email} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Tuoi: </label>
                        <input name="age" value={age} onChange={this.handleChange} type="number" />
                    </div>
                    <button type="submit">Gui</button>
                    <button type="button" onClick={this.handleReset}>Xoa tat ca</button>
                </form>
                {error && <div>{error}</div>}
                {showResult && !error && (
                    <div>
                        <h3>Thong tin nguoi dung:</h3>
                        <div>Ten: {name}</div>
                        <div>Email: {email}</div>
                        <div>Tuoi: {age}</div>
                    </div>
                )}
            </div>
        );
    }
}

export default UserForm;
