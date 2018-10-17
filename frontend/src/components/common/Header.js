import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: rebeccapurple;
  height: 225px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Title = styled.h1`
  font-size: 60px;
  color: white;
  font-weight: 400;
  margin: 0;
`

const Slogan = styled.h2`
  font-size: 20px;
  color: white;
  font-weight: 400;
  margin: 8px 0;
`

function Header ({ title, slogan }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Slogan>{slogan}</Slogan>
    </Container>
  )
}

export default Header
