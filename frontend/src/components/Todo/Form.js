import React, { Component } from 'react'
import styled from 'styled-components'

class Form extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: props.title || '',
      price: props.price || '',
      description: props.description || ''
    }
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  handleUpdate (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
    return false
  }
}

export default Form
