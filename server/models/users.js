const Sequelize = require('sequelize');
const db = require('../db/db');

const Users = db.define('user', {
    email: {
        type: Sequelize.STRING
    },
    username: {
        type: Sequelize.STRING
    },
    password: {

        type: Sequelize.STRING
    },
    isActive: {
        type: Sequelize.INTEGER
    }
})

module.exports = Users;


