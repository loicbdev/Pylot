const AddressModel = require('../models/address.model');
const toSnakeCase = require('../utils/toSnakeCase');

const addressController = {};

addressController.create = async (req, res) => {
  const snakeCasedbody = toSnakeCase(req.body);

  await AddressModel.create(snakeCasedbody, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message:
          err.code === 'ER_DUP_ENTRY'
            ? 'Le nom de cette adresse est déjà utilisé 🤔'
            : `Une erreur s'est produite 🤔`,
        address: {},
        error: err.message,
      });
    }

    return AddressModel.findOneById(result.insertId, (error, records) => {
      if (error) {
        res.status(500).json({
          success: false,
          message: `Une erreur s'est produite 🤔`,
          address: {},
          error: error.message,
        });
      }

      return res.status(201).json({
        success: true,
        message: 'Adresse ajoutée 😉',
        address: records[0],
        error: '',
      });
    });
  });
};

addressController.deleteOne = async (req, res) => {
  const { id } = req.body;

  await AddressModel.deleteOne(id, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: `Une erreur s'est produite 🤔`,
        address: {},
        error: err.message,
      });
    }

    if (!result.affectedRows) {
      return res.status(404).json({
        success: false,
        message: `Aucune adresse correspondante 🤔`,
        address: {},
        error: '',
      });
    }

    return res.status(200).json({
      success: true,
      message: `Adresse supprimée 😉`,
      address: result,
      error: '',
    });
  });
};

module.exports = addressController;
