const Store = require('./Store')

class Todo {
  constructor () {
    this._store = Store.init()
  }

  create ({
    title,
    description = '',
    price = null
  }) {
    if (!title) throw new Error('Must provide a title')
    return this._store.create({ title, description, price })
  }

  read (id) {
    return this._store.read(id)
  }

  readAll () {
    const arr = this._store.readAll()
    return arr.map(arr => ({
      ...arr[1]
    }))
  }

  update (id, {
    title,
    description,
    price
  }) {
    const item = this._store.read(id)
    if (!item) throw new Error(`${id} does not exist`)
    if (title) item.title = title
    if (description) item.description = description
    if (price) item.price = price
    this._store.update(id, item)
  }

  delete (id) {
    this._store.delete(id)
  }

}

module.exports = Todo
