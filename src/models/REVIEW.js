import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class REVIEW extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
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
    des_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'DESTINATIONS',
        key: 'des_id'
      }
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    date_post: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'REVIEW',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
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
