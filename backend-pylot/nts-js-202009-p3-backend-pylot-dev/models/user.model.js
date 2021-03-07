const db = require('../database/config');
const {
  ADD_A_USER,
  SELECT_USER_BY_ID,
  SELECT_USER_BY_MAIL,
  UPDATE_A_USER,
} = require('../database/queries');

const UserModel = {};

UserModel.create = (user, cb) => {
  db.query(ADD_A_USER, [user], (err, result) => {
    cb(err, result);
  });
};

UserModel.findOneById = (id, cb) => {
  db.query(SELECT_USER_BY_ID, [id], (err, result) => {
    cb(err, result);
  });
};

UserModel.findOneByMail = (mail, cb) => {
  db.query(SELECT_USER_BY_MAIL, [mail], (err, result) => {
    cb(err, result);
  });
};

UserModel.update = (field, id, cb) => {
  db.query(UPDATE_A_USER, [field, id], (err, result) => {
    cb(err, result);
  });
};

module.exports = UserModel;
