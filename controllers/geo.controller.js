const District = require('../models/district.model');
const Division = require('../models/division.model');
const Union = require('../models/union.model');
const Upazila = require('../models/upazila.model');

// get all division
const getDivisions = async (req, res) => {
    try {
        const divisions = await Division.find();
        if (divisions.length > 0) {
            return res.status(200).json({ status: 'success', data: divisions });
        } else {
            return res.status(500).json({ status: 'error', message: 'Division not found' });
        }
    } catch (error) {
        return res.status(500).json({ status: 'error', message: 'some error' });
    }
};

// get district by division id
const getDistricts = async (req, res) => {
    try {
        const divisionId = req.params.divisionId;
        const districts = await District.find({ division_id: divisionId });
        if (districts.length > 0) {
            return res.status(200).json({ status: 'success', data: districts });
        } else {
            return res.status(500).json({ status: 'error', message: 'Districts not found' });
        }
    } catch (error) {
        return res.status(500).json({ status: 'error', message: 'some error' });
    }
};

// get upazila by district id
const getUpazilas = async (req, res) => {
    try {
        const districtId = req.params.districtId;
        const upazilas = await Upazila.find({ district_id: districtId });
        if (upazilas.length > 0) {
            return res.status(200).json({ status: 'success', data: upazilas });
        } else {
            return res.status(500).json({ status: 'error', message: 'Upazilas not found' });
        }
    } catch (error) {
        return res.status(500).json({ status: 'error', message: 'some error' });
    }
};

// get upazila by district id
const getUnions = async (req, res) => {
    try {
        const upazilaId = req.params.upazilaId;
        const unions = await Union.find({ upazilla_id: upazilaId });
        if (unions.length > 0) {
            return res.status(200).json({ status: 'success', data: unions });
        } else {
            return res.status(500).json({ status: 'error', message: 'Unions not found' });
        }
    } catch (error) {
        return res.status(500).json({ status: 'error', message: 'some error' });
    }
};

module.exports = { getDivisions, getDistricts, getUpazilas, getUnions };
