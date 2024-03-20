const { Sequelize, DataTypes } = require('sequelize');
exports.sequelizeInstance = new Sequelize(process.env.DB_URL);
exports.sequelieDataTypes = DataTypes;