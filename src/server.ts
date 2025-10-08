import { MongoClient, ServerApiVersion } from "mongodb";
import { app } from "./app.js";


const port = 5000;

const uri = "mongodb+srv://todos:todos@cluster0.zvedd86.mongodb.net/todosDB?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


app.listen(port, async()=>{
    await client.connect();
    console.log(`Server is running at port:${port}`);
})