import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Theater_complex extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    system_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Theater_System',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Theater_complex',
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
        name: "system_id",
        using: "BTREE",
        fields: [
          { name: "system_id" },
        ]
      },
    ]
  });
  }
}
