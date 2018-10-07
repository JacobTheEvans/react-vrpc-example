import React, { Component } from 'react'
import { connectVrpc } from 'react-vrpc'

class TodoHello extends Component {
  componentDidMount () {
    console.log(this.props)
  }

  render () {
    return (
      <div>
        Test
      </div>
    )
  }
}

export default connectVrpc('react-app-vrpc-example', 'Todo')(TodoHello)
