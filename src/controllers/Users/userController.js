import initModels from "../../models/init-models.js";
import sequelize from "../../models/index.js";
import { successCode, failCode, errorCode } from "../../config/response.js";

let models = initModels(sequelize);

// Get all traveler
const getTraveler = async (req, res) => {
    try {
        let traveler = await models.TRAVELER.findAll();
        successCode(res, traveler, "successful");
    } catch (error) {
        errorCode(res, "error");
    }
}

// Get all Infomation of Traveler By first_name and last_name
const getInfoTravelerByName = async (req, res) => {
    try {
        let {first_name, last_name} = req.params;
        let inForTraveler = await models.TRAVELER.findAll({
            where: {first_name: first_name, last_name: last_name},
            include: "TRIPs"
        })

        successCode(res, inForTraveler, "success");
    } catch (error) {
        errorCode(res, "error");
    }
}

// Get Infor Booking of traveler
const getInfoBooking = async (req, res) => {
    try {
        let {user_id} = req.params;
        let inFofBooking = await models.BOOKING.findAll({
            where: {user_id: user_id},
            include: ["hotel", "trip", "veh"]
        });
        successCode(res, inFofBooking, "success");
    } catch (error) {
        errorCode(res, "error");
    }
}

// Booking a trip by user
// const bookTrip = async (req, res) => {
//     try { 
//         let { user_id } = req.params;
//         let newBookTrip = {
//             user_id: user_id
//         }
//         let book = await models.TRIPS.create({ newBookTrip });
//         if (book != []) {
//             let info_BookTrip = await models.TRIPS.findOne({
//                 where: {trip_id: trip_id, user_id: user_id}
//             });
//             successCode(res, info_BookTrip, "successful");
//         } else {
//             failCode(res, [], "fail");
//         }

//     } catch (error) {
//         errorCode(res, "error");
//     }
// }


export {
    getTraveler,
    getInfoTravelerByName,
    getInfoBooking,
    // bookTrip
}