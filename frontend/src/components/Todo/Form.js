import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.form`
  width: 100%;
  margin: 20px 0;
`

const Input = styled.input`
  display: block;
  width: 100%;
  margin: auto;
  height: 45px;
  padding: 6px 12px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #bbb;
  border-radius: 2px;
  margin: 20px 3px;
  font-size: 16px;
`

const Button = styled.button`
  width: 100%;
  display: inline-block;
  height: 38px;
  padding: 0 30px;
  color: #555;
  text-align: center;
  font-size: 11px;
  font-weight: 600;
  line-height: 38px;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  background-color: transparent;
  border-radius: 4px;
  border: 1px solid #bbb;
  cursor: pointer;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: color .4s ease-out;
  -o-transition: color .4s ease-out;
  transition: color .4s ease-out;
`

class Form extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: props.title || '',
      price: props.price || 0,
      description: props.description || ''
    }
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleUpdate (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  async handleSubmit (e) {
    e.preventDefault()
    await this.props.handleSubmit(this.state)
    this.setState({
      title: '',
      price: '',
      description: ''
    })
  }

  render () {
    const { title, price, description } = this.state
    return (
      <Container onSubmit={this.handleSubmit}>
        <Input
          name='title'
          placeholder='Title'
          value={title}
          onChange={this.handleUpdate}
        />
        <Input
          name='price'
          placeholder='Price'
          type='number'
          value={price}
          onChange={this.handleUpdate}
        />
        <Input
          name='description'
          placeholder='Description'
          value={description}
          onChange={this.handleUpdate}
        />
        <Button type='submit'>
          Submit
        </Button>
      </Container>
    )
  }
}

export default Form
