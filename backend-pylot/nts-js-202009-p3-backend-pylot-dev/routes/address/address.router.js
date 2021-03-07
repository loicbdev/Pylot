const router = require('express').Router({ mergeParams: true });
const addressController = require('../../controllers/address.controller');
const getCoordinates = require('../../middlewares/address/getCoordinates');
const verifyData = require('../../middlewares/address/verifyData');

router.post('/', getCoordinates, verifyData, addressController.create);
router.delete('/', addressController.deleteOne);

module.exports = router;
