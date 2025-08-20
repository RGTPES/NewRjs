import React, { PureComponent } from 'react'
interface Props {
    name?: string;
};
interface State {
    language: boolean;
}

class Language extends PureComponent<Props, State> {
   

    render() {
        return (
            <div style={{fontSize:'50px'}}>
                Ngôn ngữ: {this.props.name || 'Tiếng Việt'}
            </div>
        );
    }
}

export default Language
