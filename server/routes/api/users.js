const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
// DB Model
const users = require('../../models/users');

// router.get('/', (req,res) =>
//     users.findAll()
//     .then(users => {
//         res.send(users)
//     })
//     .catch(err => console.log(err)));

// Testing Add Users Data
// router.get('/post',[ check('email').isEmail(),check('password').isLength({ min: 6 }) ], (req,res) => {

//     let {email,username,password,isActive} = req.body;

//     // Insert into table
//     users.create({
//         email,
//         username,
//         password,
//         isActive
//     })
//     .then(user => res.redirect('/api/users'))
//     .catch(err => console.log(err))
// });

router.post(
  '/',
  [
    check('username', 'Username is required')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { username, email } = req.body;

    try {
      // See if user exists
      let user = await users.findOne({ where: { email } });

      if (user) {
        res.status(400).json({
          errors: [
            {
              msg: 'User already exists'
            }
          ]
        });
      }

      //Encrypt Passworrd
      let { password } = req.body;
      const salt = await bcrypt.genSalt(10);
      password = await bcrypt.hash(password, salt);

      user = await users.create({
        email,
        username,
        password,
        isActive: '1'
      });

      const payload = {
        user: {
          id: user.id
        }
      };

      //Return json web token
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

// @route DELETE api/api_data
// @desc Delete A User
// @access Public
router.delete('/:id', (req, res) => {
  users
    .findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
