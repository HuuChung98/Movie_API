import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Movies extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    movie_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    trailer: {
      type: DataTypes.TEXT,
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
    date_show: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    rate: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    hot: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    showing: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    incomming: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Movies',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "movie_id" },
        ]
      },
    ]
  });
  }
}
