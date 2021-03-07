const { check, validationResult } = require('express-validator');

module.exports = {
  updateCoPylot: [
    check('preferenceNbPylot')
      .isInt({ min: 1, max: 5 })
      .withMessage('Tu peux choisir de 1 à 5 co Pylot 😉'),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({
          success: false,
          message: errors.array(),
          data: {},
        });
      }
      return next();
    },
  ],
  updateDistance: [
    check('preferenceDistance')
      .isInt()
      .withMessage('Tu peux choisir ta distance en mètre 😉'),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({
          success: false,
          message: errors.array(),
          data: {},
        });
      }
      return next();
    },
  ],
};
