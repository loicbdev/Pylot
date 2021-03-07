const upload = require('../../config/multer/multer');

module.exports = (req, res, next) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err,
        pic: {},
      });
    }

    if (!req.file) {
      return res.status(500).json({
        success: false,
        message: 'Aucun fichier sélectionné',
        pic: {},
      });
    }

    return next();
  });
};
