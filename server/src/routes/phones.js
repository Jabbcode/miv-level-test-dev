const Router = require('express');
const { getPhones, getPhonesByClient } = require('../controllers/phones');

const router = Router();

router.get('/', getPhones);
router.get('/client/:client_id', getPhonesByClient);


module.exports = router;