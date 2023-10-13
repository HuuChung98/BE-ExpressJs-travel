import express from "express";

import {
    getTraveler,
    getInfoTravelerByName,
    getInfoBooking, 
    // bookTrip
} from "../../controllers/Users/userController.js";


const userRouter = express.Router();

// Get all traveler
userRouter.get(
    "/get-traveler", getTraveler
)
userRouter.get(
    "/get-traveler/:first_name/:last_name", getInfoTravelerByName
)
userRouter.get(
    "/get-traveler/:user_id", getInfoBooking
);

// userRouter.post(
//     "/booking/:user_id", bookTrip
// )
export default userRouter