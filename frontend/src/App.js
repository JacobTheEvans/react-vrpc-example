import React from 'react'
import { createVrpcProvider } from 'react-vrpc'
import Test from './components/Todo'

const VrpcProvider = createVrpcProvider({
  topicPrefix: 'todoexample',
  brokerUrl: 'ws://broker.hivemq.com:8000/mqtt' // ws and 8080 to work over websockets
})

function App () {
  return (
    <VrpcProvider>
      <Test />
    </VrpcProvider>
  )
}

export default App
