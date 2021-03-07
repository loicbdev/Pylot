const router = require('express').Router({ mergeParams: true });

const addressRouter = require('../address/address.router');

const userController = require('../../controllers/user.controller');

const {
  updateCoPylot,
  updateDistance,
} = require('../../middlewares/user/checkUpdateData');

router.put('/co-pylot', updateCoPylot, userController.update);
router.put('/distance', updateDistance, userController.update);

router.use('/address', addressRouter);

module.exports = router;
