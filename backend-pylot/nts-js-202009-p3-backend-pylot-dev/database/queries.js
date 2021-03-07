module.exports = {
  // SIGNIN
  SELECT_USER: 'SELECT * FROM user WHERE password = ?',
  // SIGNUP
  ADD_A_USER: 'INSERT INTO user SET ?',
  SELECT_USER_BY_ID: 'SELECT * FROM user WHERE id = ?',
  SELECT_USER_BY_MAIL: 'SELECT * FROM user WHERE email = ?',
  // UPDATE VERIFICATION ACCOUNT, UPDATE PREFERENCES, UPDATE ACCOUNT PARAMETERS
  UPDATE_A_USER: 'UPDATE user SET ? WHERE id = ?',
  SELECT_USER_ADDRESSES:
    'SELECT address_name FROM address JOIN user ON address.user_id = user.id WHERE user.id = ?',
  ADD_AN_ADDRESS: 'INSERT INTO address SET ?',
  SELECT_AN_ADDRESS: 'SELECT * FROM address WHERE id = ?',
  DELETE_AN_ADDRESS: 'DELETE FROM address WHERE id = ?',
  SELECT_ALL_ANGELS:
    'SELECT name FROM angel JOIN user ON angel.user_id = user.id WHERE user.id = ?',
  ADD_ANGEL: 'INSERT INTO angel SET ?',
  SELECT_ANGEL: 'SELECT * FROM angel WHERE id = ?',
  // CHOOSE ACTIV ANGEL
  TOGGLE_ANGEL: 'UPDATE angel SET active = !active  WHERE id = ?',
  DELETE_ANGEL: 'DELETE FROM angel WHERE id = ?',
  SELECT_ROADTRIPS:
    'SELECT * FROM user JOIN roadtrip ON user.id = roadtrip.user_id WHERE user.id = ?',
  SELECT_ONE_ROADTRIP: 'SELECT * FROM roadtrip WHERE id = ?',
  SELECT_ROADTRIPS_BY_USER:
    'SELECT * FROM user JOIN roadtrip ON user.id = roadtrip.user_id WHERE user_id = ?',
  SELECT_PAST_ROADTRIPS:
    'SELECT * FROM user JOIN roadtrip ON user.id = roadtrip.user_id WHERE user.id = ? AND roadtrip.start_date <= CURRENT_DATE() AND roadtrip.start_time < CURRENT_TIME()',
  SELECT_FUTUR_ROADTRIPS:
    'SELECT * FROM user JOIN roadtrip ON user.id = roadtrip.user_id WHERE user.id = ? AND roadtrip.start_date >= DATE(NOW()) AND roadtrip.start_time > DATE(NOW())',
  SELECT_RECEIVED_ADVICES:
    'SELECT user.firstname, user.profil_picture, user_roadtrip.comment, user_roadtrip.rate, user_roadtrip.date FROM user JOIN user_roadtrip ON user.id = user_roadtrip.user_id JOIN roadtrip ON user_roadtrip.roadtrip_id = roadtrip.id WHERE roadtrip.user_id = ?',
  SELECT_GIVEN_ADVICES: 'SELECT * FROM message_user_roadtrip WHERE user_id = ?',
  POST_ROADTRIP: 'INSERT INTO roadtrip SET ?',
  // ACCEPT A USER ON MY ROADTRIP
  ACCEPT_PYLOT: 'INSERT INTO user_roadtrip SET ?',
  DELETE_ROADTRIP: 'DELETE FROM roadtrip WHERE roadtrip.id',
};
