import React, { PureComponent, ReactNode } from 'react'

interface Props {
    id: number;
    title: string;
    Content: string;
    Author:string;
}
interface State {
    id: number;
    title: string;
    Content: string;
    Author:string;
}

class DetailPost extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            id: 0,
            title: this.props.title,
            Content: this.props.Content,
            Author: this.props.Author
        }
    }

    render(): ReactNode {
        return (
            <>
            <h1>Danh sach bai viet</h1>
            <p>id: {this.props.id}</p>
            <p>title: {this.props.title}</p>
            <p>Content: {this.props.Content}</p>
            <p>Author: {this.props.Author}</p>
            </>
            
            
        )
    }
}

export default DetailPost
