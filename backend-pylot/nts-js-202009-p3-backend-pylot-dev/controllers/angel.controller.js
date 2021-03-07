const AngelModel = require('../models/angel.model');
const toSnakeCase = require('../utils/toSnakeCase');

const angelController = {};

angelController.create = async (req, res) => {
  const snakeCasedbody = toSnakeCase(req.body);

  await AngelModel.create(snakeCasedbody, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message:
          err.code === 'ER_DUP_ENTRY'
            ? 'Cet angel existe déjà 🤔'
            : `Une erreur s'est produite 🤔`,
        angel: {},
        error: err.message,
      });
    }

    return AngelModel.findOneById(result.insertId, (error, records) => {
      if (error) {
        res.status(500).json({
          success: false,
          message: `Une erreur s'est produite 🤔`,
          angel: {},
          error: error.message,
        });
      }

      return res.status(201).json({
        success: true,
        message: 'Angel ajouté 😉',
        angel: records[0],
        error: '',
      });
    });
  });
};

angelController.deleteOne = async (req, res) => {
  const { angelId } = req.params;

  await AngelModel.deleteOne(angelId, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: `Une erreur s'est produite 🤔`,
        angel: {},
        error: err.message,
      });
    }

    if (!result.affectedRows) {
      return res.status(404).json({
        success: false,
        message: `Aucun angel correspondant 🤔`,
        angel: {},
        error: '',
      });
    }

    return res.status(200).json({
      success: true,
      message: `Angel supprimé 😉`,
      angel: result,
      error: '',
    });
  });
};

angelController.pickOne = async (req, res) => {
  const { angelId } = req.params;
  await AngelModel.toggleActive(angelId, (err) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: `Une erreur s'est produite 🤔`,
        angel: {},
        error: err,
      });
    }

    return AngelModel.findOneById(angelId, (error, records) => {
      if (error) {
        res.status(500).json({
          success: false,
          message: `Une erreur s'est produite 🤔`,
          angel: {},
          error: error.message,
        });
      }

      return res.status(200).json({
        success: true,
        message: records[0].active ? 'Angel actif 😉' : 'Angel inactif 😉',
        angel: records[0],
        error: '',
      });
    });
  });
};

module.exports = angelController;
