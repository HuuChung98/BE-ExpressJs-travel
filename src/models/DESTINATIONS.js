import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class DESTINATIONS extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    des_id: {
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
    des_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    acctraction: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    temperature: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    best_time_to_visit: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'DESTINATIONS',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "des_id" },
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
