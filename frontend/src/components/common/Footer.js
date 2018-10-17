import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: rebeccapurple;
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Author = styled.a`
  font-size: 16px;
  color: white;
  text-decoration: none;
  margin: 0;
`

function Footer ({ author, website }) {
  return (
    <Container>
      <Author
        href={website}
        target='_blank'
      >
        Made by {author}
      </Author>
    </Container>
  )
}

export default Footer
