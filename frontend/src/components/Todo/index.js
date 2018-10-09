import React, { Component } from 'react'
import { connectVrpc } from 'react-vrpc'
import styled from 'styled-components'
import Form from './Form'
import List from './List'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 850px;
`

class Todo extends Component {
  constructor () {
    super()
    this.state = {
      items: []
    }
  }

  async componentDidMount () {
    // console.log(this.props)
    const { todo } = this.props
    const items = await todo.readAll()
    this.setState({ items })
  }

  render () {
    const { todo } = this.props
    const { items } = this.state
    return (
      <Container>
        <Form handleCreation={todo.create} />
        <List
          handleDelete={todo.delete}
          handleUpdate={todo.update}
          items={items}
        />
      </Container>
    )
  }
}

export default connectVrpc('react-app-vrpc-example', 'Todo')(Todo)
