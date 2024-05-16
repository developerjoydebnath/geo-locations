const mongoose = require('mongoose');

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@portfolio-cluster.0vpshy3.mongodb.net/geo-location`;

const db = async () => {
    return await mongoose
        .connect(url)
        .then(() => console.log('Connected to database'))
        .catch((err) => console.log(err));
};

module.exports = { db };
