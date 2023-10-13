import express from "express";

import {
    getDestination
} from "../../controllers/Destinations/destinationController.js";

import {
    getTrips,
    addNewTrip
} from "../../controllers/Trips/tripController.js"

const tripRouter = express.Router();

tripRouter.get(
    "/get-destination", getDestination
);
tripRouter.get(
    "/get-trips", getTrips
)
tripRouter.post(
    "/create-trip", addNewTrip
)

export default tripRouter;