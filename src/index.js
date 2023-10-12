import express from "express";
import rootRouter from "./routers/rootRouter.js";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());

app.use(express.static("."));

app.listen(8080);

app.use("/travel", rootRouter);