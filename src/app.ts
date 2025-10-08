import express, { type Application, type Request, type Response } from 'express'
import { todoRouter } from './app/todo/todoRouter.js';

export const app: Application = express();
app.use(express.json())


app.use('/todo', todoRouter)

//Rote Route:
app.get('/', (req: Request, res: Response)=>{
    res.send("Welcome to Todo App..!")
})




