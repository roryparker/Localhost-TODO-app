const { response } = require('express')
const Todo = require('../models/Todo')

module.exports = {
    getTodos: async (req,res)=>{
        console.log(req.user)
        try{
            const todoItems = await Todo.find({userId:req.user.id})
            const itemsLeft = await Todo.countDocuments({userId:req.user.id,completed: false})
            res.render('todos.ejs', {todos: todoItems, left: itemsLeft, user: req.user})
        }catch(err){
            console.log(err)
            console.log(request, response)
        }
    },
    createTodo: async (req, res)=>{
        try{
            await Todo.create({todo: req.body.todoItem, completed: false, userId: req.user.id})
            console.log('A TODO item has been added!')
            res.redirect('/todos')
        }catch(err){
            console.log(err)
            console.log(request, response)
        }
    },
    markComplete: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: true
            })
            console.log('A TODO item has been marked complete.')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
            console.log(request, response)
        }
    },
    markIncomplete: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: false
            })
            console.log('A TODO item has been marked incomplete.')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
            console.log(request, response)
        }
    },
    deleteTodo: async (req, res)=>{
        console.log(req.body.todoIdFromJSFile)
        try{
            await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            console.log('A TODO item has been deleted!')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
            console.log(request, response)
        }
    }
}    