const db = require('../database/config');
const {
  ADD_AN_ADDRESS,
  SELECT_AN_ADDRESS,
  DELETE_AN_ADDRESS,
} = require('../database/queries');

const AddressModel = {};

AddressModel.create = (address, cb) => {
  db.query(ADD_AN_ADDRESS, [address], (err, result) => {
    cb(err, result);
  });
};

AddressModel.findOneById = (id, cb) => {
  db.query(SELECT_AN_ADDRESS, [id], (err, result) => {
    cb(err, result);
  });
};

AddressModel.deleteOne = (id, cb) => {
  db.query(DELETE_AN_ADDRESS, [id], (err, result) => {
    cb(err, result);
  });
};

module.exports = AddressModel;
