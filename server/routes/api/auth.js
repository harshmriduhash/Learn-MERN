const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const users = require('../../models/users');
const { check, validationResult } = require('express-validator');
const config = require('config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

router.get('/', auth, async (req, res) => {
  try {
    const user = await users.findByPk(req.user.id);
    res.json(user);
  } catch (err) {
    console.error('err.message');
    res.status(500).send('Server Error');
  }
});

router.post(
  '/',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter password')
      .not()
      .exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;

    try {
      // See if user exists
      let user = await users.findOne({ where: { email } });

      if (!user) {
        res.status(400).json({
          errors: [
            {
              msg: 'Invalid Email or Password'
            }
          ]
        });
      }

      // Check if password same
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        res.status(400).json({
          errors: [
            {
              msg: 'Invalid Email or Password'
            }
          ]
        });
      }

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(payload, config.get('jwtToken'), { expiresIn: 3600000 }, (err, token) => {
        if (err) throw err;
        res.json({ token });
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
