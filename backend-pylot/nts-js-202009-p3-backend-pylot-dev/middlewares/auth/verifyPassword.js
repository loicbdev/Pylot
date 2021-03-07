const bcrypt = require('bcrypt');
const UserModel = require('../../models/user.model');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const { currentPassword } = req.body;

  await UserModel.findOneById(id, async (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: `Une erreur s'est produite  🤔`,
        user: {},
        error: err.message,
      });
    }

    if (result.length === 0) {
      return res.status(404).json({
        success: false,
        message: `Aucun utilisateur trouvé  🤔`,
        user: {},
        error: '',
      });
    }

    if (!(await bcrypt.compare(currentPassword, result[0].password))) {
      return res.status(403).json({
        success: false,
        message: `Mot de passe invalide  🤔`,
        user: {},
        error: '',
      });
    }
    delete req.body.currentPassword;
    return next();
  });
};
