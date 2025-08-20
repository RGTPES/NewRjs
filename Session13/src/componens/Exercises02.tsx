import React, { PureComponent } from 'react'

interface Props {
  id: number
  name?: string;
  dateOfBirth: string;
  address?: string;
}
type State2 = {
  id: number
  name?: string;
  dateOfBirth: string;
  address?: string;
}

class Exercises02 extends PureComponent<Props, State2> {
  constructor(props: Props) {
    super(props)

    this.state = {
      id: props.id,
      name: props.name,
      dateOfBirth: props.dateOfBirth,
      address: props.address
    }
  }

  render() {
    return (
      <div>
        <p>ID: {this.state.id}</p>
        <p>Name: {this.state.name}</p>
        <p>Date of Birth: {this.state.dateOfBirth}</p>
        <p>Address: {this.state.address}</p>
      </div>
    )
  }
}

export default Exercises02
