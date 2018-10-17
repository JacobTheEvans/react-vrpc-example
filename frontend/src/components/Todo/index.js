import React, { Component } from 'react'
import { connectVrpc } from 'react-vrpc'
import styled from 'styled-components'
import Form from './Form'
import List from './List'

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 850px;
  padding: 10px 50px;
  margin: auto;
`

class Todo extends Component {
  constructor () {
    super()
    this.state = {
      items: []
    }
    this.loadTodoItems = this.loadTodoItems.bind(this)
    this.handleCreation = this.handleCreation.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  async componentDidMount () {
    this.loadTodoItems()
  }

  async loadTodoItems () {
    const { todo } = this.props
    const items = await todo.readAll()
    this.setState({ items })
  }

  async handleCreation (newItemData) {
    const { todo } = this.props
    await todo.create(newItemData)
    this.loadTodoItems()
  }

  async handleDelete (id) {
    const { todo } = this.props
    await todo.delete(id)
    this.loadTodoItems()
  }

  async handleUpdate (id, updateItemData) {
    const { todo } = this.props
    await todo.update(id, updateItemData)
    this.loadTodoItems()
  }

  render () {
    const { items } = this.state
    return (
      <Container>
        <Form handleCreate={this.handleCreation} />
        <List
          handleDelete={this.handleDelete}
          handleUpdate={this.handleUpdate}
          items={items}
        />
      </Container>
    )
  }
}

export default connectVrpc('react-app-vrpc-example', 'Todo')(Todo)
