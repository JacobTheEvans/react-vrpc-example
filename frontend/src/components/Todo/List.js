import React from 'react'
import styled from 'styled-components'
import Item from './Item'

const Container = styled.div`
  width: 100%;
`
function List ({ items }) {
  return (
    <Container>
      {
        items.map(({ title, price, description }, i) => (
          <Item
            key={title + i}
            title={title}
            price={price}
            description={description}
          />
        ))
      }
    </Container>
  )
}

export default List
