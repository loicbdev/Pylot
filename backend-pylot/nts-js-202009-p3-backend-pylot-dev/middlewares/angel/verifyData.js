const { check, validationResult } = require('express-validator');
const capitalize = require('../../utils/capitalize');

module.exports = [
  check('firstName')
    .notEmpty()
    .customSanitizer((value) => capitalize(value))
    .withMessage(`N'oublie pas de renseigner le prénom de ton angel 😉`),
  check('userId').notEmpty().isInt(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        success: false,
        message: errors.array(),
        angel: {},
      });
    }
    return next();
  },
];
