const Sequelize = require('sequelize');
const db = require('../db/db');

const Events = db.define('events', {
  event_id: {
    type: Sequelize.INTEGER
  },
  event_name: {
    type: Sequelize.STRING
  },
  createdBy: {
    type: Sequelize.STRING
  },
  location: {
    type: Sequelize.STRING
  },
  city: {
    type: Sequelize.STRING
  }
});

module.exports = Events;
