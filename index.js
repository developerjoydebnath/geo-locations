const express = require('express');
const cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser');
const { db } = require('./db/db');
const router = require('./routes');

const app = express();

const port = process.env.PORT || 8000;

// middlewares
app.use(cors({ origin: '*' }));
app.use(bodyParser.json());

// routes
app.use('/api/v1', router);

app.get('/', (req, res) => {
    return res.status(200).json({ message: 'hello world' });
});

// database connection
db();

app.listen(port, () => {
    console.log('listening on port ' + port);
});
