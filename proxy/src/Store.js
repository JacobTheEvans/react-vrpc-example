const uuid = require('uuid/v4')

class Store {
  static init () {
    if (!Store._instance) {
      Store._instance = new Store()
    }
    return Store._instance
  }

  constructor () {
    this._store = new Map()
  }

  create (value) {
    const id = uuid()
    this._store.set(id, value)
    return id
  }

  read (id) {
    return this._store.get(id)
  }

  readAll () {
    return Array.from(this._store)
  }

  update (id, value) {
    if (!this._store.has(id)) throw new Error(`${id} does not exist`)
    this._store.set(id, value)
  }

  delete (id) {
    if (!this._store.has(id)) throw new Error(`${id} does not exist`)
    this._store.delete(id)
  }
}

module.exports = Store
