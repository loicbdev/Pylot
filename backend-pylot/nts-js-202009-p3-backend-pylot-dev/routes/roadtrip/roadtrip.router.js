const router = require('express').Router({ mergeParams: true });
const formatTime = require('../../middlewares/format/formatTime');

const roadtripController = require('../../controllers/roadtrip.controller');

router.post('/', formatTime, roadtripController.create);
router.get('/', roadtripController.findAll);

module.exports = router;
