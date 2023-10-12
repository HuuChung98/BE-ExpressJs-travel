import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class HOTELS extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    hotel_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    des_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'DESTINATIONS',
        key: 'des_id'
      }
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    price_per_night: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    available_room: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'HOTELS',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "hotel_id" },
        ]
      },
      {
        name: "des_id",
        using: "BTREE",
        fields: [
          { name: "des_id" },
        ]
      },
    ]
  });
  }
}
