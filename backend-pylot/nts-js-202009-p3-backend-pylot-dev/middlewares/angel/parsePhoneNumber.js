const parsePhoneNumber = require('libphonenumber-js');

module.exports = (req, res, next) => {
  try {
    req.body.phoneNumber = parsePhoneNumber(req.body.phoneNumber, 'FR').number;
    next();
  } catch (err) {
    res.status(500).json({
      success: false,
      message: `Renseigne ton numéro au bon format ex: +33 06 46 26 ** ** 😉`,
      angel: {},
      error: err.message,
    });
  }
};
