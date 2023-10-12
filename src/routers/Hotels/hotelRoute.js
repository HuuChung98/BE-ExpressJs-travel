import express from "express";

import {
    getHotels
} from "../../controllers/Hotels/hotelController.js";

const hotelRouter = express.Router();

hotelRouter.get(
    "/get-all-hotels", getHotels
)
export default hotelRouter;