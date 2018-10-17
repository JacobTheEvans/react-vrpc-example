import React from 'react'
import styled from 'styled-components'

const ItemContainer = styled.div`
  width: 100%;
  margin: 50px 0;
  border: 1px solid #bbb;
  padding: 20px;
`

const UpperContainer = styled.div`
  display: flex;
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

function List ({ title, price, description }) {
  return (
    <ItemContainer>
      <UpperContainer>
        <Title>{title}</Title>
        {price && <Price>Price: {price}</Price>}
      </UpperContainer>
      {description && <Description>{description}</Description>}
    </ItemContainer>
  )
}

export default List
