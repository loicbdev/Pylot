const { check, validationResult } = require('express-validator');
const capitalize = require('../../utils/capitalize');
const years = require('../../utils/years');

module.exports = [
  check('firstName')
    .isLength({ min: 2 })
    .customSanitizer((value) => capitalize(value))
    .withMessage('Ton prénom doit avoir 2 lettres minimum 😉'),
  check('lastName')
    .isLength({ min: 2 })
    .customSanitizer((value) => capitalize(value))
    .withMessage('Ton nom doit avoir 2 lettres minimum'),
  check('birthYear').isIn(years).withMessage('Mauvaise année 😉'),
  check('gender')
    .isIn(['man', 'woman'])
    .withMessage('Merci de choisir un genre 😉'),
  check('email').isEmail().withMessage('Email non valide'),
  check(
    'password',
    'Le mot de passe doit contenir 5 caractères dont 1 chiffre 😉'
  )
    .not()
    .isIn(['123', 'password'])
    .isLength({ min: 5 })
    .matches(/\d/)
    .withMessage("N' utilisez pas un nom commun 😉"),
  check('passwordConfirmation')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Mot de passe différents 😉');
      }
      return true;
    })
    .withMessage('Mot de passe différents 😉'),
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
];
