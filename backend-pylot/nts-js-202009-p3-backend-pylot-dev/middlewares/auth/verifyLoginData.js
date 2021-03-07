const { check, validationResult } = require('express-validator');

module.exports = [
  check('email').isEmail().withMessage(`Cet email n'est pas valide  🤔`),
  check('password')
    .not()
    .isEmpty()
    .withMessage("N'oublie pas ton mot de passe 😉"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        success: false,
        message: errors.array()[0].msg,
        data: {},
      });
    }
    return next();
  },
];
