const router = require('express').Router({ mergeParams: true });

const mysqlConnection = require('../../database/config');


const preferencesRouter = require('./preferences.router');
const angelRouter = require('../angel/angel.router');
const roadtripRouter = require('../roadtrip/roadtrip.router');

const userController = require('../../controllers/user.controller');

const { verifyPassword, hashPassword } = require('../../middlewares/auth');
const upload = require('../../middlewares/user/upload');

router.use('/preferences', preferencesRouter);
router.use('/angels', angelRouter);

router.put('/presentation', userController.update);
router.put('/password', verifyPassword, hashPassword, userController.update);
router.post('/profil-pic', upload, userController.uploadProfilPic);

router.use('/roadtrips', roadtripRouter);

// GET USERS' INFORMATIONS BY ID

router.get('/', (req, res) => {
  mysqlConnection.query(
    `SELECT * FROM user WHERE id = ?`,
    [req.params.id],
    (error, result) => {
      if (error) {
        res.status(500).json({ errorMessage: error.message });
      }
      if (result.length === 0) {
        res.sendStatus(404);
      } else {
        res.status(200).json(result);
      }
    }
  );
});

module.exports = router;
