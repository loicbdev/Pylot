const router = require('express').Router({ mergeParams: true });
const angelController = require('../../controllers/angel.controller');
const verifyData = require('../../middlewares/angel/verifyData');
const parsePhoneNumber = require('../../middlewares/angel/parsePhoneNumber');

router.post('/', parsePhoneNumber, verifyData, angelController.create);
router.delete('/:angelId', angelController.deleteOne);
router.put('/:angelId/active', angelController.pickOne);

module.exports = router;
