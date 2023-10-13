import express from "express";
import tripRouter from "./Trips/tripRouter.js";
import hotelRouter from "./Hotels/hotelRoute.js";
import vehicleRouter from "./Vehicle/vehicleRouter.js";
import userRouter from "./Travelers/userRouter.js";

// create API
const rootRouter = express.Router(); 

// Manage object of endpoint
rootRouter.use("/trip", tripRouter);
rootRouter.use("/hotel", hotelRouter);
rootRouter.use("/vehicle", vehicleRouter);
rootRouter.use("/traveler", userRouter);

export default rootRouter;