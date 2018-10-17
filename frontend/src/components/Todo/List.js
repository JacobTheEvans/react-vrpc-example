import React from 'react'
import styled from 'styled-components'
import Item from './Item'

const Container = styled.div`
  width: 100%;
  min-height: 300px;
`
function List ({ items, handleDelete, handleUpdate }) {
  return (
    <Container>
      {
        items.map(({ id, title, price, description}, i) => (
          <Item
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            handleDelete={() => handleDelete(id)}
            handleUpdate={(updateData) => handleUpdate(id, updateData)}
          />
        ))
      }
    </Container>
  )
}

export default List
