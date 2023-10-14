import initModels from "../../models/init-models.js";
import sequelize from "../../models/index.js";
import { successCode, failCode, errorCode } from "../../config/response.js";

let models = initModels(sequelize);

// Booking trips
const booking = async (req, res) => {
    try {
        let { user_id, hotel_id, veh_id, trip_id, booking_date } = req.body;
        let booking_trip = {
            user_id,
            hotel_id, 
            veh_id, 
            trip_id, 
            booking_date
        }

        await models.BOOKING.create(booking_trip);
        res.send("Booking successful");
    } catch (error) {
        errorCode(res, "error");
    }
}

export {
    booking
}