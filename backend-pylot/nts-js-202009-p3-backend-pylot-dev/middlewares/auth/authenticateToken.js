const jwt = require('jsonwebtoken');

module.exports = (req, res) => {
  const { token } = req.body;
  if (token === null) {
    res.status(401).json(false);
  }

  return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err) => {
    if (err) {
      return res.status(403).json(false);
    }

    return res.status(200).json(true);
  });
};
