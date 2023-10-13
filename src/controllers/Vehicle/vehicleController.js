import initModels from "../../models/init-models.js";
import sequelize from "../../models/index.js";
import { successCode, failCode, errorCode } from "../../config/response.js";

let models = initModels(sequelize);

// Get all vehicle
const getAllVehicle = async (req, res) => {
    try {
        let allVehicle = await models.VEHICLE.findAll({
            include: "trip",
        })
        // sucess return data
        successCode(res, allVehicle, "successful");
    } catch (error) {
        error(res, "error")
    }
}

// Get vehicle by trip ID
const getVehicleByTripId = async (req, res) => {
    try {
        let { trip_id } = req.params;
        let vehicleByTripId = await models.VEHICLE.findAll({
            where: {trip_id: trip_id}
        })
        successCode(res, vehicleByTripId, "successful");
    } catch (error) {
        errorCode(res, "error");
    }
}

//Get vehicle by name 
const getVehicleByName = async (req, res) => {
    try {
        let {veh_name} = req.params;
        let vehicleByName = await models.VEHICLE.findAll({
            where: { veh_name: veh_name }
        })
        successCode(res, vehicleByName, "successful");
    } catch (error) {
        errorCode(res, "error");
    }
}

export {
    getAllVehicle,
    getVehicleByTripId,
    getVehicleByName
}