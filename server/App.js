const express = require("express");
const app = express();

// DB
const db = require('./db/db');

// Routes To Api/Users
const users = require('./routes/api/users');

// Routes To Api/Events
const events = require('./routes/api/events');

// Routes To Api/EventDetail
const eventDetails = require('./routes/api/eventDetails');

// Routese to Api/Auth
const auth = require('./routes/api/auth');

// Testing DB
db.authenticate()
.then(() => {
    console.log('Connected to the database successfully!')
})
.catch(err => {
    console.error('Unable to connect to the database : ', err);
})

// Body Parser For User Input
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// Routes to API
app.use('/api/users', users);
app.use('/api/events', events);
app.use('/api/eventDetails', eventDetails);
app.use('/api/auth', auth);

const PORT = process.env.PORT || 8000;

// Connected to DB

app.listen(PORT, () => {
  console.log(`Connected to PORT ${PORT}`);
});
