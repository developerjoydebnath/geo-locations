const mongoose = require('mongoose');

const divisionSchema = mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    bn_name: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
});

const Division = mongoose.model('Division', divisionSchema);

module.exports = Division;
