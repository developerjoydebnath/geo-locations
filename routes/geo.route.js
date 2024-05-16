const router = require('express').Router();
const { getDivisions, getDistricts, getUpazilas, getUnions } = require('../controllers/geo.controller');

router.get('/divisions', getDivisions);
router.get('/districts/:divisionId', getDistricts);
router.get('/upazilas/:districtId', getUpazilas);
router.get('/unions/:upazilaId', getUnions);

module.exports = router;
