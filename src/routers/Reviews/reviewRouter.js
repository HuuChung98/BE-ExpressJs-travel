import express from "express";

import {
    getReview,
    reviewFromTraveler
} from "../../controllers/Review/reviewController.js";


const reviewRouter = express.Router();

reviewRouter.get(
    "/get-review", getReview
)

reviewRouter.post(
    "/add-review", reviewFromTraveler
)
export default reviewRouter