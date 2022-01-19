const Router = require('express');
const { getRepairs, getRepairsByPhone } = require('../controllers/Repairs');

const router = Router();

router.get('/', getRepairs);
router.get('/phone/:phone_id', getRepairsByPhone);


module.exports = router;