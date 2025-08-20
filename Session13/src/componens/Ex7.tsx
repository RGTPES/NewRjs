import React, { PureComponent } from 'react';
import Theme from './Theme';
import Language from './Language';


interface State {
	language: boolean;
    theme: boolean;
}

class Ex7 extends PureComponent<object, State> {
	state: State = { language: true, theme: true };

	changeLanguage = () => {
		this.setState((prev) => ({ language: !prev.language }));
        this.setState((prev) => ({ theme: !prev.theme }));
	};



	render() {
		return (
<div className='container' style={{backgroundColor: this.state.theme ? 'white' : 'black', color: this.state.theme ? 'black' : 'white',height: '100vh'}}>

            
                <Theme theme={this.state.theme ? "light" : "dark"} />
                <Language name={this.state.language ? "Tiếng Việt" : "English"} />
                <button onClick={this.changeLanguage}>Đổi ngôn ngữ</button>
                
			</div>
			
		);
	}
}

export default Ex7;
