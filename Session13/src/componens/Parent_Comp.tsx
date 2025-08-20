import React, { PureComponent } from 'react'
import Children_Comp from './Children_Comp'

class Parent_Comp extends PureComponent {


    render() {
        const me = `Nguyen Van Nam`
        return (
            <Children_Comp name={me} />
        )
    }
}

export default Parent_Comp
