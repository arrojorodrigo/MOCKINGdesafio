import express from "express";
import cors from "cors"
import mockingRouter from "./routers/mocking.router.js";

const app = express();

app.use(express.json() );
app.use(express.urlencoded() );
app.use(cors() );

app.use("/mockingproducts", mockingRouter)

app.listen(8080, ()=> {console.log("server arriba")});

