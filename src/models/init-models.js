import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _BOOKING from  "./BOOKING.js";
import _DESTINATIONS from  "./DESTINATIONS.js";
import _HOTELS from  "./HOTELS.js";
import _REVIEW from  "./REVIEW.js";
import _TRAVELER from  "./TRAVELER.js";
import _TRIPS from  "./TRIPS.js";
import _VEHICLE from  "./VEHICLE.js";

export default function initModels(sequelize) {
  const BOOKING = _BOOKING.init(sequelize, DataTypes);
  const DESTINATIONS = _DESTINATIONS.init(sequelize, DataTypes);
  const HOTELS = _HOTELS.init(sequelize, DataTypes);
  const REVIEW = _REVIEW.init(sequelize, DataTypes);
  const TRAVELER = _TRAVELER.init(sequelize, DataTypes);
  const TRIPS = _TRIPS.init(sequelize, DataTypes);
  const VEHICLE = _VEHICLE.init(sequelize, DataTypes);

  HOTELS.belongsTo(DESTINATIONS, { as: "de", foreignKey: "des_id"});
  DESTINATIONS.hasMany(HOTELS, { as: "HOTELs", foreignKey: "des_id"});
  REVIEW.belongsTo(DESTINATIONS, { as: "de", foreignKey: "des_id"});
  DESTINATIONS.hasMany(REVIEW, { as: "REVIEWs", foreignKey: "des_id"});
  BOOKING.belongsTo(HOTELS, { as: "hotel", foreignKey: "hotel_id"});
  HOTELS.hasMany(BOOKING, { as: "BOOKINGs", foreignKey: "hotel_id"});
  BOOKING.belongsTo(TRAVELER, { as: "user", foreignKey: "user_id"});
  TRAVELER.hasMany(BOOKING, { as: "BOOKINGs", foreignKey: "user_id"});
  REVIEW.belongsTo(TRAVELER, { as: "user", foreignKey: "user_id"});
  TRAVELER.hasMany(REVIEW, { as: "REVIEWs", foreignKey: "user_id"});
  TRIPS.belongsTo(TRAVELER, { as: "user", foreignKey: "user_id"});
  TRAVELER.hasMany(TRIPS, { as: "TRIPs", foreignKey: "user_id"});
  BOOKING.belongsTo(TRIPS, { as: "trip", foreignKey: "trip_id"});
  TRIPS.hasMany(BOOKING, { as: "BOOKINGs", foreignKey: "trip_id"});
  DESTINATIONS.belongsTo(TRIPS, { as: "trip", foreignKey: "trip_id"});
  TRIPS.hasMany(DESTINATIONS, { as: "DESTINATIONs", foreignKey: "trip_id"});
  VEHICLE.belongsTo(TRIPS, { as: "trip", foreignKey: "trip_id"});
  TRIPS.hasMany(VEHICLE, { as: "VEHICLEs", foreignKey: "trip_id"});
  BOOKING.belongsTo(VEHICLE, { as: "veh", foreignKey: "veh_id"});
  VEHICLE.hasMany(BOOKING, { as: "BOOKINGs", foreignKey: "veh_id"});

  return {
    BOOKING,
    DESTINATIONS,
    HOTELS,
    REVIEW,
    TRAVELER,
    TRIPS,
    VEHICLE,
  };
}
