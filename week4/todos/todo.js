const express = require("express")
const todoRouter = express.Router()
const {v4: uuidv4} = require("uuid")


const todo = [
    {name: "cook breakfast",
     description: "eggs and sausage",
     imageUrl: "https://image.shutterstock.com/image-photo/stock-image-hearty-breakfast-focus-260nw-61457707.jpg",
     completed: true,
     _id: uuidv4()
    }
]


todoRouter.route("/")
.get((req, res) => {
    res.send(todo)
})
.post((req, res) => {
    const newItem = req.body
    newItem._id = uuidv4()
    todo.push(newItem)
    res.send('Added ${newItem}')
})

todoRouter.route("/:todoId")
.get((req, res) => {
    const todoId = req.params.todoId
    const foundTodo = todo.find(todo => todo._id === todoId)
    res.send(foundTodo)
})
.put ((req, res) => {
    const todoId = req.params.todoId
    const updateTodo = req.body
    const todoIndex = todo.findIndex(todo => todo._id === todoId)
    const updatedTodo = Object.assign(todo[todoIndex], updateTodo)
    res.send("Updated")
})
.delete((req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todo.findIndex(todo => todo._id === todoId)
    todo.splice(todoIndex, 1)
    res.send("Deleted")
})



module.exports = todoRouter