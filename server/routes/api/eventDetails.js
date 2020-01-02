const express = require('express');
const router = express.Router();
const Details = require('../../models/eventDetails');
const User = require('../../models/users');
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

/// @ROUTE GET API/EVENTS
/// @DESCE GET CURRENT USERS EVENT
/// @ACCESS PRIVATE
router.get('/', auth, async (req, res) => {
  try {
    const details = await Details.findAll({ where: { detail_id: req.user.id } });

    if (!details) {
      return res.status(400).json({ msg: 'No Event Details Yet' });
    }

    res.json(details);
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
      check('price', 'Price is Required')
        .not()
        .isEmpty(),
      check('price', 'Price is should be a number').isNumeric(),
      check('quantity', 'Quantity is Required')
        .not()
        .isEmpty(),
      check('quantity', 'Quantity is should be a number').isNumeric(),
      check('description', 'Description is Required')
        .not()
        .isEmpty(),
      check('photo', 'Photo is Required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { price, quantity, description, photo } = req.body;
    try {
      const details = await Details.create({
        detail_id: req.user.id,
        price,
        quantity,
        description,
        photo
      });

      res.json(details);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
