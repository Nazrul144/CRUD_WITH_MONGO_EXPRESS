import express, { type Request, type Response } from 'express'
import { client } from '../../server.js'
import { ObjectId } from 'mongodb'

export const todoRouter = express.Router()

todoRouter.get('/', async(req: Request, res: Response)=>{
    const myDB = client.db("todosDB")
    const collection = myDB.collection("todo")
    const result = await collection.find().toArray()
    res.send(result)
})

todoRouter.get('/:id', async(req: Request, res: Response)=>{
    const id = req.params.id
    const myDB = client.db("todosDB")
    const collection = myDB.collection("todo")
    const result = await collection.findOne({_id: new ObjectId(id)})
    res.json(result)
})

todoRouter.post('/create-todo', async(req: Request, res: Response)=>{
    const myDB = client.db("todosDB")
    const collection = myDB.collection("todo")
    const doc = req.body;
    const result = await collection.insertOne(doc);
    res.send(result)
})

todoRouter.put('/update-todo/:id', async(req: Request, res: Response)=>{
    const myDB = client.db("todosDB")
    const collection = myDB.collection("todo")

    const id = req.params.id  //Receiving ID.
    const {title, body, createdAt} = req.body //Receiving body's data.

    const query = {_id: new ObjectId(id)}  //Matching Mongodb's "_id" and client "id". client id converted to mongodb id to match.

    //Update:
    const update = {$set:{title, body, createdAt}}
    const option = {upsert: true}
    const result = await collection.updateOne(query, update, option)
    res.send(result)

})

todoRouter.delete('/delete-todo/:id', async(req: Request, res: Response)=>{
    const myDB = client.db("todosDB")
    const collection = myDB.collection("todo")

    const id = req.params.id

    const query = {_id: new ObjectId(id)}

    const remove = await collection.deleteOne(query)
    res.send(remove)

})
