const router = require('express').Router();

const authRouter = require('./auth/auth.router');
const userRouter = require('./user/main.router');

const verifyToken = require('../middlewares/auth/verifyToken');

router.use('/auth', authRouter);
router.use('/users/:id', verifyToken, userRouter);

module.exports = router;
