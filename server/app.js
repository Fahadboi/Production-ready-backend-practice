import express from "express";
import cors from "cors"

const app = express();

app.use(cors({
    origin: "*"
}))

app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true, limit : "16kb" }))


export default app;