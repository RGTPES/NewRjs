import React, { PureComponent} from 'react'

interface Props {
    name: string
}
interface State {
    username?: string
}

class Children_Comp extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            username: props.name
        }
    }

    render() {
        return (
            <div>
                <h1>Họ và tên component Cha {this.props.name}</h1>
                <h1>Họ và tên component Con {this.state.username}</h1>
                
            </div>
        )
    }
}

export default Children_Comp
