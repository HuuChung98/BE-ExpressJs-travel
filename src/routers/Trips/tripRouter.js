import express from "express";

import {
    getDestination
} from "../../controllers/Destinations/destinationController.js";

const tripRouter = express.Router();

tripRouter.get(
    "/get-destination", getDestination
);

export default tripRouter;