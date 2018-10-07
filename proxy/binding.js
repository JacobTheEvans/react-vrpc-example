const { VrpcAdapter } = require('vrpc')
const Todo = require('./src')

VrpcAdapter.register(Todo)
