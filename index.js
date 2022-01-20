// const app =require('express')

import express from 'express'
import usesRouter from './routes/users.js'
const app = express()

const port = process.env.PORT || 3000

app.listen(port , function (){
    console.log(`listening in ${port}`)
})
    
//Method of EXPRESS

//Static Page
app.use(express.static('public'))

//Dinamy Page
app.set('view engine', 'ejs') //also need to make npm i ejs
app.get('/hello',(req,res)=>{
    res.render('hello.ejs',{title: 'hello world'})
})

app.use(function (req, res, next) {
    console.log(req.url)
    next()
})

app.get('/', (req, res) =>{
    res.status(200) 
    res.json({message: 'server'})
})

app.use('/users',usesRouter)

app.get('/posts',(req, res,next) =>{
    res.json(req.body)
})

//Downlaod file
app.get('/myBook', (req, res) =>{
    res.download('myBook.txt')
})

//404 error
app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
  })
//
