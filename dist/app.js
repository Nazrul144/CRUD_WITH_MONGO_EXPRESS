import express, {} from 'express';
import { todoRouter } from './app/todo/todoRouter.js';
export const app = express();
app.use(express.json());
app.use('/todo', todoRouter);
//Rote Route:
app.get('/', (req, res) => {
    res.send("Welcome to Todo App..!");
});
//# sourceMappingURL=app.js.map