import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Showtimes extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    theater_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Theater',
        key: 'theater_id'
      }
    },
    movie_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Movies',
        key: 'movie_id'
      }
    },
    date_showtimes: {
      type: DataTypes.DATE,
      allowNull: true
    },
    price_ticket: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Showtimes',
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
        name: "theater_id",
        using: "BTREE",
        fields: [
          { name: "theater_id" },
        ]
      },
      {
        name: "movie_id",
        using: "BTREE",
        fields: [
          { name: "movie_id" },
        ]
      },
    ]
  });
  }
}
