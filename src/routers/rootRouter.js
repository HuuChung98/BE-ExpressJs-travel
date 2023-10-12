import express from "express";
import tripRouter from "./Trips/tripRouter.js";
import hotelRouter from "./Hotels/hotelRoute.js";

// create API
const rootRouter = express.Router(); 

// Manage object of endpoint
rootRouter.use("/trip", tripRouter);
rootRouter.use("/hotel", hotelRouter);

export default rootRouter;