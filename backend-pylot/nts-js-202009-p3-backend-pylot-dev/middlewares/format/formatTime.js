module.exports = (req, res, next) => {
  const { startTime } = req.body;
  [req.body.startTime] = startTime.split('T')[1].split('.');

  return next();
};
