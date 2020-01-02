const Sequelize = require('sequelize');
const db = require('../db/db');

const eventDetails = db.define('event_detail', {
  detail_id: {
    type: Sequelize.INTEGER
  },
  price: {
    type: Sequelize.INTEGER
  },
  quantity: {
    type: Sequelize.INTEGER
  },
  description: {
    type: Sequelize.TEXT
  },
  photo: {
    type: Sequelize.BLOB
  }
});

module.exports = eventDetails;
