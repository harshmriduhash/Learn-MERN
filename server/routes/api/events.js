const express = require('express');
const router = express.Router();
const Event = require('../../models/events');
const User = require('../../models/users');
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

/// @ROUTE GET API/EVENTS
/// @DESCE GET CURRENT USERS EVENT
/// @ACCESS PRIVATE
router.get('/', auth, async (req, res) => {
  try {
    const events = await Event.findAll({ where: { event_id: req.user.id } });

    if (!events) {
      return res.status(400).json({ msg: 'No Events Yet' });
    }
    res.json(events);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

/// @ROUTE GET POST API/EVENTS
/// @DESCE GET CURRENT USERS EVENT
/// @ACCESS PRIVATE
router.post(
  '/',
  [
    auth,
    [
      check('event_name', 'Event Name is Required')
        .not()
        .isEmpty(),
      check('createdBy', 'Organization is Required')
        .not()
        .isEmpty(),
      check('location', 'Location is Required')
        .not()
        .isEmpty(),
      check('city', 'City is Required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { event_name, createdBy, location, city } = req.body;
    try {
      const data = await Event.create({
        event_id: req.user.id,
        event_name,
        createdBy,
        location,
        city
      });
      res.json(data);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
