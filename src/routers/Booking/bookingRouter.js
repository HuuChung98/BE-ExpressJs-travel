import express from "express";

import {
    booking
} from "../../controllers/Booking/bookingController.js";

const bookingRouter = express.Router();

bookingRouter.post(
    "booking-trip", booking
)

export default bookingRouter