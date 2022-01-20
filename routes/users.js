import express from 'express'
const router = express.Router()
const users = [{name:'Liran',age:"24"},{name:'Or',age:"27"}]


router.get('/',(req, res,next) =>{
    res.json(users)
    })
    router.post('/',(req,res)=>{
        users.push(req.body)
    })
    router.get('/:id',(req, res,next) =>{
        const userId = req.params.id
        res.json(users[userId])
        })
export default router