import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _Banner from  "./Banner.js";
import _Booking_Ticket from  "./Booking_Ticket.js";
import _Chair from  "./Chair.js";
import _Movies from  "./Movies.js";
import _Showtimes from  "./Showtimes.js";
import _Theater from  "./Theater.js";
import _Theater_System from  "./Theater_System.js";
import _Theater_complex from  "./Theater_complex.js";
import _Users from  "./Users.js";

export default function initModels(sequelize) {
  const Banner = _Banner.init(sequelize, DataTypes);
  const Booking_Ticket = _Booking_Ticket.init(sequelize, DataTypes);
  const Chair = _Chair.init(sequelize, DataTypes);
  const Movies = _Movies.init(sequelize, DataTypes);
  const Showtimes = _Showtimes.init(sequelize, DataTypes);
  const Theater = _Theater.init(sequelize, DataTypes);
  const Theater_System = _Theater_System.init(sequelize, DataTypes);
  const Theater_complex = _Theater_complex.init(sequelize, DataTypes);
  const Users = _Users.init(sequelize, DataTypes);

  Booking_Ticket.belongsTo(Chair, { as: "chair", foreignKey: "chair_id"});
  Chair.hasMany(Booking_Ticket, { as: "Booking_Tickets", foreignKey: "chair_id"});
  Banner.belongsTo(Movies, { as: "movie", foreignKey: "movie_id"});
  Movies.hasMany(Banner, { as: "Banners", foreignKey: "movie_id"});
  Showtimes.belongsTo(Movies, { as: "movie", foreignKey: "movie_id"});
  Movies.hasMany(Showtimes, { as: "Showtimes", foreignKey: "movie_id"});
  Booking_Ticket.belongsTo(Showtimes, { as: "showtime", foreignKey: "showtimes_id"});
  Showtimes.hasMany(Booking_Ticket, { as: "Booking_Tickets", foreignKey: "showtimes_id"});
  Chair.belongsTo(Theater, { as: "theater", foreignKey: "theater_id"});
  Theater.hasMany(Chair, { as: "Chairs", foreignKey: "theater_id"});
  Showtimes.belongsTo(Theater, { as: "theater", foreignKey: "theater_id"});
  Theater.hasMany(Showtimes, { as: "Showtimes", foreignKey: "theater_id"});
  Theater_complex.belongsTo(Theater_System, { as: "system", foreignKey: "system_id"});
  Theater_System.hasMany(Theater_complex, { as: "Theater_complexes", foreignKey: "system_id"});
  Theater.belongsTo(Theater_complex, { as: "theater_complex", foreignKey: "theater_complex_id"});
  Theater_complex.hasMany(Theater, { as: "Theaters", foreignKey: "theater_complex_id"});
  Booking_Ticket.belongsTo(Users, { as: "user", foreignKey: "user_id"});
  Users.hasMany(Booking_Ticket, { as: "Booking_Tickets", foreignKey: "user_id"});

  return {
    Banner,
    Booking_Ticket,
    Chair,
    Movies,
    Showtimes,
    Theater,
    Theater_System,
    Theater_complex,
    Users,
  };
}
