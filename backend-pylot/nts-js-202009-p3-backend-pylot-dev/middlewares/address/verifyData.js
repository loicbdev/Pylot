const { check, validationResult } = require('express-validator');
const capitalize = require('../../utils/capitalize');

module.exports = [
  check('addressName')
    .notEmpty()
    .customSanitizer((value) => capitalize(value))
    .withMessage(`N'oublie pas de lui donner un nom 😉`),
  check('streetName')
    .notEmpty()
    .withMessage(`N'oublie pas le nom de ta rue 😉`),
  check('postalCode')
    .isInt()
    .isPostalCode('FR')
    .withMessage(`N'oublie pas ton code postal ex: 44000 😉`),
  check('city')
    .notEmpty()
    .customSanitizer((value) => capitalize(value))
    .withMessage(`N'oublie pas ta ville 😉`),
  check('country')
    .notEmpty()
    .customSanitizer((value) => capitalize(value))
    .withMessage(`N'oublie pas le pays 😉`),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        success: false,
        message: errors.array(),
        address: {},
      });
    }
    return next();
  },
];
