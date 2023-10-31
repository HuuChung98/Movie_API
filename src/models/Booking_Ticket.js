import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Booking_Ticket extends Model {
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
        model: 'Users',
        key: 'user_id'
      }
    },
    showtimes_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Showtimes',
        key: 'id'
      }
    },
    chair_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Chair',
        key: 'chair_id'
      }
    }
  }, {
    sequelize,
    tableName: 'Booking_Ticket',
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
        name: "showtimes_id",
        using: "BTREE",
        fields: [
          { name: "showtimes_id" },
        ]
      },
      {
        name: "chair_id",
        using: "BTREE",
        fields: [
          { name: "chair_id" },
        ]
      },
    ]
  });
  }
}
