import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Chair extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    chair_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name_chair: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    type_chair: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    theater_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Theater',
        key: 'theater_id'
      }
    }
  }, {
    sequelize,
    tableName: 'Chair',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "chair_id" },
        ]
      },
      {
        name: "theater_id",
        using: "BTREE",
        fields: [
          { name: "theater_id" },
        ]
      },
    ]
  });
  }
}
