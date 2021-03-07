const router = require('express').Router();

const authController = require('../../controllers/auth.controller');

const {
  verifyRegistrationData,
  verifyLoginData,
  hashPassword,
  authenticateToken,
} = require('../../middlewares/auth');

router.post(
  '/sign-up',
  verifyRegistrationData,
  hashPassword,
  authController.signUp
);

router.post('/login', verifyLoginData, authController.login);

router.post('/authenticate', authenticateToken);

module.exports = router;
