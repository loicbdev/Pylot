const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UserModel = require('../models/user.model');
const toSnakeCase = require('../utils/toSnakeCase');

const { ACCESS_TOKEN_SECRET } = process.env;

const authController = {};

authController.signUp = async (req, res) => {
  const { passwordConfirmation, ...user } = req.body;
  const snakeCasedUser = toSnakeCase(user);

  await UserModel.create(snakeCasedUser, (err, results) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: `Une erreur s'est produite 🤔`,
        user: {},
        error: err.message,
      });
    }
    return UserModel.findOneById(results.insertId, (error, records) => {
      if (error) {
        res.status(500).json({
          success: false,
          message: `Une erreur s'est produite 🤔`,
          user: {},
          error: error.message,
        });
      }

      const { password, ...newUser } = records[0];
      return res.status(201).json({
        success: true,
        message: 'Ton compte a été crée 😉',
        user: newUser,
        error: '',
      });
    });
  });
};

authController.login = async (req, res) => {
  const { email, password: bodyPassword } = req.body;

  await UserModel.findOneByMail(email, async (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: `Une erreur s'est produite 🤔`,
        user: {},
        error: err.message,
      });
    }

    if (result.length === 0) {
      return res.status(404).json({
        success: false,
        message: `Aucun utilisateur trouvé pour cet email 🤔`,
        user: {},
        error: '',
      });
    }

    if (await bcrypt.compare(bodyPassword, result[0].password)) {
      const { password, ...user } = result;

      const token = jwt.sign({ id: result[0].id }, ACCESS_TOKEN_SECRET, {
        expiresIn: '1h',
      });

      return res.status(200).json({
        success: true,
        message: `Heureux de te revoir 😉`,
        user,
        error: '',
        token,
      });
    }

    return res.status(403).json({
      success: false,
      message: `Mot de passe invalide 🤔`,
      user: {},
      error: '',
    });
  });
};

module.exports = authController;
