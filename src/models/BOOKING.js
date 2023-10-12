import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class BOOKING extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    booking_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'TRAVELER',
        key: 'user_id'
      }
    },
    hotel_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'HOTELS',
        key: 'hotel_id'
      }
    },
    veh_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'VEHICLE',
        key: 'veh_id'
      }
    },
    trip_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'TRIPS',
        key: 'trip_id'
      }
    },
    booking_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'BOOKING',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "booking_id" },
        ]
      },
      {
        name: "user_id",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "hotel_id",
        using: "BTREE",
        fields: [
          { name: "hotel_id" },
        ]
      },
      {
        name: "veh_id",
        using: "BTREE",
        fields: [
          { name: "veh_id" },
        ]
      },
      {
        name: "trip_id",
        using: "BTREE",
        fields: [
          { name: "trip_id" },
        ]
      },
    ]
  });
  }
}
