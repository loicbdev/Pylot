const db = require('../database/config');
const {
  ADD_ANGEL,
  SELECT_ANGEL,
  DELETE_ANGEL,
  TOGGLE_ANGEL,
} = require('../database/queries');

const AngelModel = {};

AngelModel.create = (angel, cb) => {
  db.query(ADD_ANGEL, [angel], (err, result) => {
    cb(err, result);
  });
};

AngelModel.findOneById = (id, cb) => {
  db.query(SELECT_ANGEL, [id], (err, result) => {
    cb(err, result);
  });
};

AngelModel.deleteOne = (id, cb) => {
  db.query(DELETE_ANGEL, [id], (err, result) => {
    cb(err, result);
  });
};

AngelModel.toggleActive = (id, cb) => {
  db.query(TOGGLE_ANGEL, [id], (err, result) => {
    cb(err, result);
  });
};

module.exports = AngelModel;
