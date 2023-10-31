import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Theater extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    theater_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    theater_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    theater_complex_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Theater_complex',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Theater',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "theater_id" },
        ]
      },
      {
        name: "theater_complex_id",
        using: "BTREE",
        fields: [
          { name: "theater_complex_id" },
        ]
      },
    ]
  });
  }
}
