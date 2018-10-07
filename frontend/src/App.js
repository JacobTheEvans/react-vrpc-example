import React from 'react'
import { createVrpcProvider } from 'react-vrpc'
import Test from './components/Todo'

const VrpcProvider = createVrpcProvider({
  topicPrefix: 'react/vrpc/example',
  brokerUrl: 'ws://test.mosquitto.org:8080' // ws and 8080 to work over websockets
})

function App () {
  return (
    <VrpcProvider>
      <Test />
    </VrpcProvider>
  )
}

export default App
