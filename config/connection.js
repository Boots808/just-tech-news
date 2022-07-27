const Sequelize = require("sequelize");

require("dotenv").config();

let Sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_Name,
    process.env.DB_User,
    process.env.DB_PW,
    {
      host: "localost",
      dialect: "mysql",
      port: 3306,
    }
  );
}

// //create connection to our db
// const sequelize = new Sequelize(
//   process.env.DB_Name,
//   process.env.DB_USER,
//   process.env.DB_PW,

module.exports = sequelize;
