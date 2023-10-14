import initModels from "../../models/init-models.js";
import sequelize from "../../models/index.js";
import { successCode, failCode, errorCode } from "../../config/response.js";

let model = initModels(sequelize);

// Get all review 
const getReview = async (req, res) => {
    try {
        let reviews = await model.REVIEW.findAll();
        successCode(res, reviews, "successful");
    } catch (error) {
        errorCode(res, "error");
    }
}

// Add review from traveler 
const reviewFromTraveler = async (req, res) => {
    try {
        let { user_id, des_id, rating, comment, date_post } = req.body;
        let new_Review = {
            user_id,
            des_id,
            rating,
            comment,
            date_post
        }
        await model.REVIEW.create(new_Review);
        res.send("Thank you for your review");
    } catch (error) {
        errorCode(res, "error");
    }
}

export {
    getReview,
    reviewFromTraveler
}