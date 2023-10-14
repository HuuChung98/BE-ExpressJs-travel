import express from "express";
import tripRouter from "./Trips/tripRouter.js";
import hotelRouter from "./Hotels/hotelRoute.js";
import vehicleRouter from "./Vehicle/vehicleRouter.js";
import userRouter from "./Travelers/userRouter.js";
import reviewRouter from "./Reviews/reviewRouter.js";
import bookingRouter from "./Booking/bookingRouter.js";

// create API
const rootRouter = express.Router(); 

// Manage object of endpoint
rootRouter.use("/trip", tripRouter);
rootRouter.use("/hotel", hotelRouter);
rootRouter.use("/vehicle", vehicleRouter);
rootRouter.use("/traveler", userRouter);
rootRouter.use("/review", reviewRouter);
rootRouter.use("/booking", bookingRouter);

export default rootRouter;