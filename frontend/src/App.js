import React from 'react'
import { createVrpcProvider } from 'react-vrpc'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Todo from './components/Todo'

const VrpcProvider = createVrpcProvider({
  topicPrefix: 'todoexample',
  brokerUrl: 'ws://broker.hivemq.com:8000/mqtt' // ws and 8080 to work over websockets
})

function App () {
  return (
    <VrpcProvider>
      <Header
        title={'Vrpc Todo'}
        slogan={'Todo with just code'}
      />
      <Todo />
      <Footer
        author={'Jacob Evans'}
        website={'http://jacobtheevans.com'}
      />
    </VrpcProvider>
  )
}

export default App
