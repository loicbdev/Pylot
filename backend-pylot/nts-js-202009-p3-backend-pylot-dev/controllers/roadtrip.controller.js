const RoadtripModel = require('../models/roadtrip.model');
const toSnakeCase = require('../utils/toSnakeCase');

const roadtripController = {};

roadtripController.create = async (req, res) => {
  const snakeCasedbody = toSnakeCase(req.body);

  await RoadtripModel.create(snakeCasedbody, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: `Une erreur s'est produite, précise tes adresses de départ et arrivée 🤔`,
        roadtrip: {},
        error: err.message,
      });
    }

    return RoadtripModel.findOneById(result.insertId, (error, records) => {
      if (error) {
        res.status(500).json({
          success: false,
          message: `Une erreur s'est produite 🤔`,
          roadtrip: {},
          error: error.message,
        });
      }

      return res.status(201).json({
        success: true,
        message: 'Roadtrip ajouté 😉',
        roadtrip: records[0],
        error: '',
      });
    });
  });
};

roadtripController.findAll = async (req, res) => {
  const { id } = req.params;

  await RoadtripModel.findAll(id, (err, results) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: `Une erreur s'est produite 🤔`,
        roadtrip: {},
        error: err.message,
      });
    }

    if (results.length === 0) {
      return res.status(404).json({
        success: false,
        message: `Aucun trajet disponible 🤔`,
        roadtrip: {},
      });
    }

    return res.status(201).json({
      success: true,
      message: '',
      roadtrips: results,
      error: '',
    });
  });
};

module.exports = roadtripController;
