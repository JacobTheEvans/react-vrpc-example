import React, { Component } from 'react'
import styled from 'styled-components'
import Form from './Form'

const ItemContainer = styled.div`
  width: 100%;
  margin: 50px 0;
  border: 1px solid #bbb;
  padding: 20px;
  position: relative;
`

const UpperContainer = styled.div`
  display: flex;
  margin-top: 5px;
`

const Title = styled.h2`
  font-size: 18px;
  flex-grow: 1;
`
const Price = styled.p`
  font-size: 16px;
  width: 20%;
  text-align: left;
`
const Description = styled.p`
  font-size: 16px;
`

const Toolbar = styled.div`
  border: none;
  background: none;
  font-size: 20px;
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
`
const Button = styled.button`
  border: none;
  background: none;
  font-size: 20px;
`

class Item extends Component {
  constructor (props) {
    super(props)
    this.state = {
      edit: false,
    }
    this.toggleEdit = this.toggleEdit.bind(this)
  }

  toggleEdit () {
    this.setState(prevState => ({
      edit: !prevState.edit
    }))
  }

  render () {
    const {
      title,
      price,
      description,
      handleDelete,
      handleUpdate
    } = this.props
    const { edit } = this.state
    return (
      <ItemContainer>
        {!edit && (
          <div>
            <Toolbar>
              <Button onClick={this.toggleEdit}>
                <i className='fa fa-pencil' aria-hidden='true' />
              </Button>
              <Button onClick={handleDelete}>
                <i className='fa fa-times' aria-hidden='true' />
              </Button>
            </Toolbar>
            <UpperContainer>
              <Title>{title}</Title>
              {price && <Price>Price: ${price}</Price>}
            </UpperContainer>
            {description && <Description>{description}</Description>}
          </div>
        )}
        {edit && (
          <Form
            title={title}
            price={price}
            description={description}
            handleSubmit={(data) => {
              handleUpdate(data)
              this.toggleEdit()
            }}
          />
        )}
      </ItemContainer>
    )
  }
}

export default Item
