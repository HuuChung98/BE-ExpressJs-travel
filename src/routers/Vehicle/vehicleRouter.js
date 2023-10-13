import express from "express";

import {
    getAllVehicle, 
    getVehicleByTripId,
    getVehicleByName
} from "../../controllers/Vehicle/vehicleController.js";

const vehicleRouter = express.Router();

vehicleRouter.get(
    "/get-vehicle", getAllVehicle
);
vehicleRouter.get(
    "/get-vehicle/:trip_id", getVehicleByTripId
);
vehicleRouter.get(
    "/get-vehicle/:veh_name", getVehicleByName
);


export default vehicleRouter