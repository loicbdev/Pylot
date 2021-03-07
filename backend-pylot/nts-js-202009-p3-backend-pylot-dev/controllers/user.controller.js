const UserModel = require('../models/user.model');
const toSnakeCase = require('../utils/toSnakeCase');

const userController = {};

userController.update = async (req, res) => {
  const { id } = req.params;
  const snakeCasedbody = toSnakeCase(req.body);

  await UserModel.update(snakeCasedbody, id, (err) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: `Une erreur s'est produite 🤔`,
        user: {},
        error: err.message,
      });
    }

    return UserModel.findOneById(id, (error, records) => {
      if (error) {
        res.status(500).json({
          success: false,
          message: `Une erreur s'est produite 🤔`,
          user: {},
          error: error.message,
        });
      }

      const { password, ...user } = records[0];
      return res.status(201).json({
        success: true,
        message: 'Tes préférences ont été modifiées 😉',
        user,
        error: '',
      });
    });
  });
};

userController.uploadProfilPic = async (req, res) => {
  const { id } = req.params;

  req.body.profilPicture = req.file.filename;
  const snakeCasedbody = toSnakeCase(req.body);

  await UserModel.update(snakeCasedbody, id, (err) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: `Une erreur s'est produite 🤔`,
        user: {},
        error: err.message,
      });
    }

    return UserModel.findOneById(id, (error, records) => {
      if (error) {
        res.status(500).json({
          success: false,
          message: `Une erreur s'est produite 🤔`,
          user: {},
          error: error.message,
        });
      }

      const { password, ...user } = records[0];
      return res.status(201).json({
        success: true,
        message: 'Photo ajoutée 😉',
        user,
        error: '',
      });
    });
  });
};

module.exports = userController;
