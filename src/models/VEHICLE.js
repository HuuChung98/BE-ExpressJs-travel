import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class VEHICLE extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    veh_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    trip_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'TRIPS',
        key: 'trip_id'
      }
    },
    veh_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    price: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'VEHICLE',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
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
