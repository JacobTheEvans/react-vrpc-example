/* global describe, it, before */
const { assert } = require('chai')
const Todo = require('../src')

describe('Todo application', () => {
  it('should allow you to create a new Todo instance with no arguments', () => {
    const todo = new Todo()
    assert.isDefined(todo)
  })

  describe('.create', () => {
    let todo
    before(() => {
      todo = new Todo()
    })
    it('should create a new todo item when given only a title', () => {
      const id = todo.create({ title: 'TestItem' })
      assert.isDefined(id)
      const item = todo._store.read(id)
      assert.isDefined(item)
      assert.isDefined(item.title)
    })
    it('should throw an error when not given a title', () => {
      assert.throws(() => todo.create({}), 'Must provide a title')
    })
    it('should create a new todo item when given a title, description and price', () => {
      const id = todo.create({ title: 'TestItem' })
      assert.isDefined(id)
      const item = todo._store.read(id)
      assert.isDefined(item)
      assert.isDefined(item.title)
      assert.isDefined(item.description)
      assert.isDefined(item.price)
    })
  })

  describe('.read', () => {
    let todo
    let id
    before(() => {
      todo = new Todo()
      id = todo.create({ title: 'TestReadItem' })
    })
    it('should return a todo item when given a valid id', () => {
      const item = todo.read(id)
      assert.isDefined(item)
      assert.isDefined(item.title)
    })
    it('should return undefined when given a invalid id', () => {
      const item = todo.read('notValidId')
      assert.isUndefined(item)
    })
  })

  describe('.readAll', () => {
    let todo
    before(() => {
      todo = new Todo()
      todo.create({ title: 'TestReadAllItem' })
    })
    it('should return an array of items', () => {
      const items = todo.readAll()
      assert.isArray(items)
      assert.isAtLeast(items.length, 1)
      assert.isDefined(items[0].title)
    })
  })

  describe('.update', () => {
    let todo
    let id
    before(() => {
      todo = new Todo()
      id = todo.create({ title: 'TestUpdateItem' })
    })
    it('should update an item when given valid new data', () => {
      const testData = {
        title: 'Updated',
        description: 'Updated',
        price: 20
      }
      todo.update(id, testData)
      const item = todo._store.read(id)
      assert.equal(item.title, testData.title)
      assert.equal(item.description, testData.description)
      assert.equal(item.price, testData.price)
    })
    it('should throw an error if given an invalid id', () => {
      const testData = {
        title: 'Updated',
        description: 'Updated',
        price: 20
      }
      assert.throws(() => todo.update('NotRealId', testData), 'NotRealId does not exist')
    })
  })

  describe('.delete', () => {
    let todo
    let id
    before(() => {
      todo = new Todo()
      id = todo.create({ title: 'TestDeleteItem' })
    })
    it('should delete an item when given valid id', () => {
      todo.delete(id)
      const item = todo._store.read(id)
      assert.isUndefined(item)
    })
    it('should throw an error if given an invalid id', () => {
      assert.throws(() => todo.delete('NotRealId'), 'NotRealId does not exist')
    })
  })
})
