const db = require('../database/config');
const {
  POST_ROADTRIP,
  SELECT_ONE_ROADTRIP,
  SELECT_ROADTRIPS_BY_USER,
} = require('../database/queries');

const RoadtripModel = {};

RoadtripModel.create = (roadtrip, cb) => {
  db.query(POST_ROADTRIP, [roadtrip], (err, result) => {
    cb(err, result);
  });
};

RoadtripModel.findOneById = (id, cb) => {
  db.query(SELECT_ONE_ROADTRIP, [id], (err, result) => {
    cb(err, result);
  });
};

RoadtripModel.findAll = (id, cb) => {
  db.query(SELECT_ROADTRIPS_BY_USER, [id], (err, result) => {
    cb(err, result);
  });
};

module.exports = RoadtripModel;
